import { View, Text, FlatList, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GymItem from '../../components/GymItem'
import EmptyState from '../../components/EmptyState'
import CustomButton from '../../components/CustomButton'
import GymField from '../../components/GymField'
import { appwriteConfig, databases, getGyms, account } from '../../lib/appwrite'
import { ID } from 'react-native-appwrite';
import useAppwrite from '../../lib/useAppwrite';


//const gyms = [{ gymName: 'Awesome Gym' }, { gymName: 'Beginner Gym' }, { gymName: 'Intermediate Gym' }, { gymName: 'Advanced Gym' }];

const Gyms = () => {
    const [ refresh, setRefresh ] = useState(false);
    const { data: gyms } = useAppwrite(getGyms, [refresh]);
    const [form, setForm] = useState({
        gymName: ''
    });

    const AddGym = async () => {
        const currentAccount = await account.get();
        try {
            if (!form.gymName) {
                return Alert.alert("Please enter a gym name")
            }

            const newGym = await databases.createDocument(
                appwriteConfig.databaseId,
                appwriteConfig.gymCollectionId,
                ID.unique(),
                { gymName: form.gymName, users: currentAccount.$id }
            )
            console.log(currentAccount.$id);

            Alert.alert("Gym created successfully");

            setForm({ gymName: '' });

            setRefresh(!refresh);

            return newGym;
        } catch (error) {
            console.log(error);
            return Alert.alert("Invalid")
        }
    }

    return (
        <SafeAreaView className="bg-primary h-full">
            <View className="mt-6 px-4 space-y-3"><Text className="font-psemibold text-3xl text-white">Gyms</Text></View>
            <View className='w-full flex-row justify-between px-4'>
                <GymField
                    title="Gym Name"
                    value={form.gymName}
                    handleChangeText={(e) => setForm({ ...form, gymName: e })}
                    otherStyles="mt-7 w-70"
                    placeholder="Random Gym" />
                <CustomButton
                    title="Add Gym"
                    handlePress={AddGym}
                    containerStyles={`h-4 mt-12 w-1/4 font-psemibold`}
                    textStyles={`text-sm`}
                />
            </View>
            <FlatList className="w-full flex-1"
                data={gyms}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <GymItem gym={item} />
                )}
            />
        </SafeAreaView>
    )
}

export default Gyms