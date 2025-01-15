import { router } from 'expo-router';
import { Avatars, Account, Client, Databases, ID, Query } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.climbing.climbr',
    projectId: '6777344c000b5e081ce6',
    databaseId: '67773dcc00194f3c4416',
    userCollectionId: '67773def0027d85dffad',
    climbCollectionId: '67773e150008a0a0abf3',
    gymCollectionId: '67773ff800276b244632',
    storageId: '67774785000f59261e4c',
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
    ;

export const account = new Account(client);
const avatar = new Avatars(client)
export const databases = new Databases(client);

export const createUser = async (username, email, password) => {
    // Register User
    try {
        const newAccount = await account.create(ID.unique(), email, password, username)

        if (!newAccount) throw Error;

        const avatarUrl = avatar.getInitials()

        await signIn(email, password)

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            { accountId: newAccount.$id, email, username, avatar: avatarUrl })

        return newUser
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)

        return session;
    } catch (error) {
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get()

        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
    }
}

export const logOut = async () => {
    try {
        await account.deleteSession('current')
        router.replace('../(auth)/sign-in')

    } catch (error) {
        console.log(error);
    }
}

export const getGyms = async () => {
    try {
        const currentAccount = await account.get()

        const gym = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.gymCollectionId,
            [Query.equal('users', currentAccount.$id)]
        )
        console.log(gym["documents"]);

        return gym["documents"];
    } catch (error) {
        console.log(error);
    }
}

export const getClimbs = async () => {
    try {
        const currentAccount = await account.get()

        const climbs = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.climbCollectionId,
            [Query.equal('users', currentAccount.$id)]
        )
        console.log(climbs["documents"]);

        return climbs["documents"];
    } catch (error) {
        console.log(error);
    }
}