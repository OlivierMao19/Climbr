import { View, Text } from 'react-native'
import React from 'react'

const ClimbItem = ({ climb }) => {
    return (
        <View className="bg-secondary-300 p-3 my-2 mx-4 rounded-lg">
            <Text className="text-white text-lg font-semibold font-pmedium">{climb.name}</Text>
            <Text className="text-gray-100 font-semibold font-pmedium">Grade: {climb.grade}</Text>
            <Text className="text-gray-100 font-semibold font-pmedium">{climb.gym}</Text>
        </View>
    )
}

export default ClimbItem