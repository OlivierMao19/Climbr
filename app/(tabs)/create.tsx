import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { appwriteConfig, databases } from '../../lib/appwrite'
import { ID } from 'react-native-appwrite';
import { useGlobalContext } from '../../context/GlobalProvider';
import CustomButton from '../../components/CustomButton'
import { SafeAreaView } from 'react-native-safe-area-context';
import Gyms from './gyms';
import ClimbField from '../../components/ClimbField';

const Create = () => {
    const [form, setForm] = useState({
        climbName: 'test climb Name',
        vgrade: 1,
        climbType: 'Overhang',
        status: true,
        comments: '',
        date: '01/08/2025',
        gyms: '',
    });

    const { user } = useGlobalContext();

    const createClimb = async () => {
        try {
            if (!form.climbName || !form.vgrade || !form.climbType || !form.date) {
                return Alert.alert("Please fill all fields");
            }

            const newClimb = await databases.createDocument(
                appwriteConfig.databaseId,
                appwriteConfig.climbCollectionId,
                ID.unique(),
                { climbName: form.climbName, climbType: form.climbType, status: form.status, date: form.date, users: user.$id, vgrade: form.vgrade, gyms: '677f4efb001ba3be9141' }
            );

            return newClimb;
        } catch (error) {
            console.log(error);
            return Alert.alert("Invalid");
        } finally {
            setForm({
                climbName: 'test 2',
                vgrade: 1,
                climbType: '',
                status: false,
                comments: '',
                date: '01/08/2025',
                gyms: ''
            });
            return Alert.alert("Climb created successfully");
        }
    };

    return (
        <SafeAreaView className="bg-primary h-full">
            <View className="mt-3 px-4 space-y-3">
                <Text className="font-psemibold text-3xl text-white">
                    Create a climb
                </Text>
            </View>
            <View className='w-full justify-center px-4'>
                <ClimbField
                    title="Climb name"
                    value={form.climbName}
                    handleChangeText={(e) => setForm({ ...form, climbName: e })}
                    otherStyles="mt-2"
                    placeholder="Name your climb" />
                <ClimbField
                    title="V grade"
                    value={form.vgrade}
                    handleChangeText={(e) => setForm({ ...form, vgrade: e })}
                    otherStyles="mt-2"
                    placeholder="1 to 9" />
                <ClimbField
                    title="Climb type"
                    value={form.climbType}
                    handleChangeText={(e) => setForm({ ...form, climbType: e })}
                    otherStyles="mt-2"
                    placeholder="Overhang, slabs or normal" />
                <ClimbField
                    title="Status"
                    value={form.status}
                    handleChangeText={(e) => setForm({ ...form, status: e })}
                    otherStyles="mt-2"
                    placeholder="Completed or in progress" />
                <ClimbField
                    title="Comments"
                    value={form.comments}
                    handleChangeText={(e) => setForm({ ...form, comments: e })}
                    otherStyles="mt-2"
                    placeholder="Start writing..." />
                <ClimbField
                    title="Gym"
                    value={form.gyms}
                    handleChangeText={(e) => setForm({ ...form, gyms: e })}
                    otherStyles="mt-2"
                    placeholder="Select gym" />
                <ClimbField
                    title="Date"
                    value={form.date}
                    handleChangeText={(e) => setForm({ ...form, date: e })}
                    otherStyles="mt-2"
                    placeholder="Random Gym" />
                <CustomButton
                    title="Create climb"
                    handlePress={createClimb}
                    containerStyles={`h-4 mt-12 w-1/4 font-psemibold`}
                    textStyles={`text-sm`}
                />
            </View>
        </SafeAreaView>

    );
};

export default Create