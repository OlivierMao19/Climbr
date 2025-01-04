import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import ClimbItem from '../../components/ClimbItem';
import EmptyState from '../../components/EmptyState';
import CustomButton from '../../components/CustomButton';

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

    return (
        <SafeAreaView className="bg-primary h-full">
            <FlatList
                data={[]}
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
                            <CustomButton
                                title="Filter by"
                                handlePress={() => setFilterAttribute('Hard')}
                                containerStyles="w-20" />
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