import { View, Text } from 'react-native'
import React from 'react'
import DotMenu from './DotMenu'

const ClimbItem = ({ climb }) => {
    return (
        <View className="bg-secondary-300 p-3 my-2 mx-4 rounded-lg">
            <View className="flex-row justify-between"><Text className="text-white text-lg font-semibold font-pmedium">{climb.name}</Text><DotMenu /></View>
            <Text className="text-gray-100 font-semibold font-pmedium">Grade: V{climb.grade}</Text>
            <Text className="text-gray-100 font-semibold font-pmedium">{climb.gym}</Text>
            <Text className="text-gray-100 font-semibold font-pmedium">Type: {climb.type}</Text>
        </View>
    )
}

export default ClimbItem