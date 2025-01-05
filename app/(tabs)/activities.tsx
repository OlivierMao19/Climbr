import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import ClimbItem from '../../components/ClimbItem';
import EmptyState from '../../components/EmptyState';
import CustomButton from '../../components/CustomButton';
import Dropdown from '../../components/Dropdown';

const climbs = [{ id: '1', name: 'Challenging Route', grade: 'Hard', gym: 'Awesome Gym' },
{ id: '2', name: 'Easy Route', grade: 'Easy', gym: 'Beginner Gym' },]

const Activities = () => {
    const [filterAttribute, setFilterAttribute] = useState(null);

    const filterClimbs = (climbs, attribute) => {
        if (!attribute) {
            return climbs;
        }
        return climbs.filter(climb => climb.grade === attribute);
    };

    const filteredClimbs = filterClimbs(climbs, filterAttribute);

    const isNotEmpty = (data) => {
        console.log(data.length);
        return !(data.length === 0);
    }

    return (
        <SafeAreaView className="bg-primary h-full">
            <FlatList
                data={ climbs }
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ClimbItem climb={item} />
                )}
                ListHeaderComponent={() => (
                    <View className="my-6 px-4 space-y-6">
                        <View className="justify-between items-start flex-row mb-6">
                            <View>
                                <Text className="font-psemibold text-3xl text-white">Activities</Text>
                            </View>
                            { isNotEmpty(climbs) ?
                            <Dropdown
                                title="Filter by"
                                handlePress = { filterClimbs } 
                                itemData={[{id:"Easy", value:"1"}, {id:"Medium", value:"2"}, {id:"Hard", value:"3"}]}/> : null}
                        </View>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <EmptyState
                        title="No climbs yet"
                        subtitle="Quite empty... Add a climb to get started!"
                    />
                )}
            />

        </SafeAreaView>
    )
}

export default Activities