import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import CustomButton from '@/components/CustomButton'
import { logOut } from '../../lib/appwrite';

const Profile = () => {
    return (
        <SafeAreaView className="bg-primary h-full">
            <View className="justify-between items-start flex-row">
                <Text>Profile</Text>
                <CustomButton 
                    title="Logout" 
                    handlePress = {() => logOut()}
                    containerStyles="w-40 h-15" />
            </View>
        </SafeAreaView>
    )
}

export default Profile