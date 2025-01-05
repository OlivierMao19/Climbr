import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React, { useCallback, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

const Dropdown = ({ title, itemData, handlePress, containerStyles }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = useCallback(() => setExpanded(!expanded), [expanded]);

    return (
        <View className={`${containerStyles}`}>	
            <TouchableOpacity className="flex-row items-center h-12 justify-between bg-secondary-300 flex-row w-full items-center px-4 rounded-lg border-2 border-red-500" onPress={toggleExpand}>
                <Text className="text-white opacity-80"> { title } </Text>
                <AntDesign name={!expanded ? "caretup" : "caretdown"} size={18} color="white"/>
            </TouchableOpacity>
            { expanded ? 
                <View className="p-0 h-0 relative">
                    <View className="flex-1 px-5 justify-center items-center absolute w-full">
                        <FlatList 
                        data={ itemData }
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={0.8} onPress={ handlePress } className="border-2 border-black-200 bg-secondary-300 w-full justify-between flex-row">
                                <Text className="text-white font-psemibold"> { item.id } </Text>
                            </TouchableOpacity>
                            )}/>
                    </View>
                </View> : null } 
        </View>
    )
}

const styles = StyleSheet.create({
    /**backdrop: {
      padding: 20,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },**/
    optionItem: {
      height: 40,
      justifyContent: "center",
    },
    separator: {
      height: 4,
    },
    options: {
      position: "absolute", //-- absolute
      // top: 53,
      backgroundColor: "white", //bg-primary
      width: "100%", //w-full
      padding: 10, //p-10
      borderRadius: 6,
      maxHeight: 250,
    },
    text: {
      fontSize: 15,
      opacity: 0.8,
    },
    button: {
      height: 50,
      justifyContent: "space-between",
      backgroundColor: "#fff",
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      paddingHorizontal: 15,
      borderRadius: 8,
    },
  });

export default Dropdown