import { View, Text, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GymItem from '../../components/GymItem'
import EmptyState from '../../components/EmptyState'
import CustomButton from '../../components/CustomButton'
import GymField from '../../components/GymField'
import { appwriteConfig, databases } from '../../lib/appwrite'
import { ID } from 'react-native-appwrite';
import { useGlobalContext } from '../../context/GlobalProvider';

const gyms = [{ gymName: 'Awesome Gym' }, { gymName: 'Beginner Gym' }, { gymName: 'Intermediate Gym' }, { gymName: 'Advanced Gym' }];

const Gyms = () => {
    const [form, setForm] = useState({
        gymName: ''
    });
    const { user } = useGlobalContext();

    const AddGym = async () => {
        try {
            if (!form.gymName) {
                return Alert.alert("Please enter a gym name")
            }

            const newGym = await databases.createDocument(
                appwriteConfig.databaseId,
                appwriteConfig.gymCollectionId,
                ID.unique(),
                { gymName: form.gymName, users: user.$id, GymId: ID.unique() }
            )
            console.log(user.$id);
            return newGym;
        } catch (error) {
            console.log(error);
            return Alert.alert("Invalid")
        } finally {
            setForm({ gymName: '' });
            Alert.alert("Gym created successfully");
        }
    }

    return (
        <SafeAreaView className="bg-primary h-full">
            <View className="mt-3 px-4 space-y-3"><Text className="font-psemibold text-3xl text-white">Gyms</Text></View>
            <View className='w-full flex-row flex-1 justify-between px-4'>
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
            <FlatList className="w-full py-2"
                data={gyms}
                keyExtractor={(item) => item.gymName}
                renderItem={({ item }) => (
                    <GymItem gym={item} />
                )}
                ListEmptyComponent={() => (
                    <EmptyState
                        title="No gyms yet"
                        subtitle="Quite empty... Add a gym to get started!"
                    />
                )}
            />
        </SafeAreaView>
    )
}

export default Gyms