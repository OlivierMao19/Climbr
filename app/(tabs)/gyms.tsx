import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GymItem from '../../components/GymItem'
import EmptyState from '../../components/EmptyState'
import CustomButton from '../../components/CustomButton'
import FormField from '../../components/FormField'

const gyms = [{gymName: 'Awesome Gym'}, {gymName: 'Beginner Gym'}, {gymName: 'Intermediate Gym'}, {gymName: 'Advanced Gym'}];

const Gyms = () => {
    const [form, setForm] = useState({
        gymName: ''
    });

    const AddGym = () => {
        console.log('Add Gym');
    }

    return (
        <SafeAreaView className="bg-primary h-full">
            <View className="my-6 px-4 space-y-6">
                <View className="justify-between items-start flex-row mb-6">
                    <View>
                        <Text className="font-psemibold text-3xl text-white">Gyms</Text>
                    </View>
                </View>
            </View>
            <View className='w-full justify-center px-4'>
            <FormField 
                title="Gym Name"
                value={form.gymName}
                handleChangeText={(e) => setForm({ ...form, gymName: e })}
                otherStyles="mt-7"
                keyboardType="email-address"/>
            <CustomButton
                title="Add Gym"
                handlePress={ AddGym }
            />
            </View>
            <FlatList className="w-full py-4"
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