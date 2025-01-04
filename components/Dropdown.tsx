import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React, { useCallback, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

const Dropdown = ({ title, itemData, containerStyles }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = useCallback(() => setExpanded(!expanded), [expanded]);

    return (
        <View className={`${containerStyles} flex-row`}>	
            <TouchableOpacity onPress={toggleExpand} style={styles.touchable}>
                <Text className="text-white"> { title } </Text>
                <AntDesign name={!expanded ? "caretup" : "caretdown"} size={20} color="white"/>
            </TouchableOpacity>
            { expanded ? 
                <FlatList 
                data={ itemData }
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Text> { item.value } </Text>
                    </TouchableOpacity>
                    )}
                ItemSeparatorComponent={() => <View/>}
            /> : null } 
        </View>
    )
}

const styles = StyleSheet.create({
    touchable: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginLeft: 8,
    },
});

export default Dropdown