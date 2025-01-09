import { View, Text, TextInput } from 'react-native'
import React from 'react'

const ClimbField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-100 font-pmedium pl-1 mb-1">{title}</Text>

            <View className="border-2 border-black-200 w-full h-16 px-4 mb-3 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
                <TextInput
                    className="flex-1 text-white font-psemibold text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                />
            </View>
        </View>
    )
}

export default ClimbField