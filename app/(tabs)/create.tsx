import { View, Text, Alert, ScrollView, Button } from 'react-native'
import React, { useState } from 'react'
import { appwriteConfig, databases } from '../../lib/appwrite'
import { ID } from 'react-native-appwrite';
import { useGlobalContext } from '../../context/GlobalProvider';
import CustomButton from '../../components/CustomButton'
import { SafeAreaView } from 'react-native-safe-area-context';
import Gyms from './gyms';
import ClimbField from '../../components/ClimbField';
import DateComponent from '../../components/DateComponent';

const Create = () => {
    const [form, setForm] = useState({
        climbName: '',
        vgrade: 1,
        climbType: '',
        status: false,
        comments: '',
        date: new Date(),
        gyms: '677f4efb001ba3be9141',
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
                { climbName: form.climbName, climbType: form.climbType, status: form.status, users: user.$id, vgrade: form.vgrade, gyms: '677f4efb001ba3be9141', date: form.date.toISOString().split('T')[0] }
            );

            return newClimb;
        } catch (error) {
            console.log(error);
            return Alert.alert("Invalid");
        } finally {
            setForm({
                climbName: '',
                vgrade: 1,
                climbType: '',
                status: false,
                comments: '',
                date: new Date(),
                gyms: ''
            });
            return Alert.alert("Climb created successfully");
        }
    };

    const handleVGradeChange = (e) => {
        const value = parseInt(e);
        if (value < 1 || value > 13) {
            Alert.alert("Invalid V grade", "V grade must be an integer between 1 and 13");
        } else {
            setForm({ ...form, vgrade: value });
        }
    };

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className='w-full justify-center h-full px-4 my-6'>
                    <Text className="text-3xl text-white text-semibold mb-4 font-psemibold">Create a Climb</Text>
                    <ClimbField
                        title="Climb name"
                        value={form.climbName}
                        handleChangeText={(e) => setForm({ ...form, climbName: e })}
                        otherStyles="mt-1"
                        placeholder="Name your climb" />
                    <ClimbField
                        title="V grade"
                        value={form.vgrade}
                        handleChangeText={(e) => handleVGradeChange(e)}
                        placeholder="1 to 13"
                        keyboardType="numeric"
                        maxLength={2} />
                    <ClimbField
                        title="Climb type"
                        value={form.climbType}
                        handleChangeText={(e) => setForm({ ...form, climbType: e })}
                        placeholder="Overhang, slabs or normal" />
                    <ClimbField
                        title="Status"
                        value={form.status}
                        handleChangeText={(e) => setForm({ ...form, status: e })}
                        placeholder="Completed or in progress" />
                    <ClimbField
                        title="Comments"
                        value={form.comments}
                        handleChangeText={(e) => setForm({ ...form, comments: e })}
                        placeholder="Start writing..." />
                    <DateComponent title="Date" date={form.date} setDate={(date) => setForm({ ...form, date })} />
                    <ClimbField
                        title="Gym"
                        value={form.gyms}
                        handleChangeText={(e) => setForm({ ...form, gyms: e })}
                        placeholder="Select gym" />
                    <CustomButton
                        title="Create climb"
                        handlePress={createClimb}
                        containerStyles={`mt-3 font-psemibold`}
                        textStyles={`text-xl`}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>

    );
};

export default Create