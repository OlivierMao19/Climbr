import { View, Text } from 'react-native'
import React from 'react'
import DotMenu from './DotMenu'

const GymItem = ({ gym }) => {
    return (
        <View className="bg-secondary-300 p-3 my-2 mx-4 rounded-lg">
            <View className="flex-row justify-between"> 
                <Text className="text-white text-lg font-semibold font-pmedium">{gym.gymName}</Text>
                <DotMenu />
            </View>
        </View>
    )
}

export default GymItem