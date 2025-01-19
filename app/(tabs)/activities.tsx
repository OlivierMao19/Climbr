import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import ClimbItem from '../../components/ClimbItem';
import EmptyState from '../../components/EmptyState';
import CustomButton from '../../components/CustomButton';
import Dropdown from '../../components/Dropdown';
import { getClimbs } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite';

/*
const climbs = [
    { id: '10', name: 'Challenging Route', grade: 1, gym: 'Awesome Gym', type: 'Slabs' },
    { id: '11', name: 'Easy Route', grade: 2, gym: 'Beginner Gym', type: 'Overhangs' },
    { id: '12', name: 'Intermediate Route', grade: 3, gym: 'Intermediate Gym', type: 'Normal' },
    { id: '1', name: 'V1 Route', grade: 1, gym: 'Advanced Gym', type: 'Slabs' },
    { id: '2', name: 'V2 Route', grade: 2, gym: 'Advanced Gym', type: 'Overhangs' },
    { id: '3', name: 'V3 Route', grade: 3, gym: 'Advanced Gym', type: 'Normal' },
    { id: '4', name: 'V4 Route', grade: 4, gym: 'Advanced Gym', type: 'Slabs' },
    { id: '5', name: 'V5 Route', grade: 5, gym: 'Advanced Gym', type: 'Overhangs' },
    { id: '6', name: 'V6 Route', grade: 6, gym: 'Advanced Gym', type: 'Normal' },
    { id: '7', name: 'V7 Route', grade: 7, gym: 'Advanced Gym', type: 'Slabs' },
    { id: '8', name: 'V8 Route', grade: 8, gym: 'Advanced Gym', type: 'Overhangs' },
    { id: '9', name: 'V9 Route', grade: 9, gym: 'Advanced Gym', type: 'Normal' },
]; 
*/

const Activities = () => {
    const [filterAttribute, setFilterAttribute] = useState(null);
    //const [ refresh, setRefresh ] = useState(false);
    const { data: climbs } = useAppwrite(getClimbs, []);
    console.log(climbs);

    const filterClimbs = (climbs, attribute) => {
        if (!attribute || attribute === 'null') {
            return climbs;
        }
        else if (['Slabs', 'Overhangs', 'Normal'].includes(attribute)) {
            return climbs.filter(climb => climb.type === attribute);
        }
        return climbs.filter(climb => climb.grade === attribute);
    };

    const filteredClimbs = filterClimbs(climbs, filterAttribute);

    const isNotEmpty = (data) => {
        return !(data === undefined || data.length === 0);
    }

    return (
        <SafeAreaView className="bg-primary h-full">
            <FlatList
                data={climbs}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => (
                    <ClimbItem climb={item} />
                )}
                ListHeaderComponent={() => (
                    <View className="my-6 px-4 space-y-6">
                        <View className="justify-between items-start flex-row mb-6">
                            <View>
                                <Text className="font-psemibold text-3xl text-white">Activities</Text>
                            </View>
                            {isNotEmpty(climbs) ?
                                <Dropdown
                                    setFilterAttribute={setFilterAttribute} /> : null}
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