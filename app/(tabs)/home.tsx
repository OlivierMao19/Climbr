import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { images } from '../../constants';
import ClimbItem from '../../components/ClimbItem';
import EmptyState from '../../components/EmptyState';
import { getCurrentUser } from '../../lib/appwrite';
import { useGlobalContext } from '../../context/GlobalProvider';

const climbs = [{ id: '1', name: 'Challenging Route', difficulty: 'Hard', gym: 'Awesome Gym' },
{ id: '2', name: 'Easy Route', difficulty: 'Easy', gym: 'Beginner Gym' },]

const Home = () => {
    const { user } = useGlobalContext();
    return (
        <SafeAreaView className="bg-primary h-full">
            <View className="my-6 px-4 space-y-6">
                <View className="justify-between items-start flex-row mb-6">
                    <View>
                        <Text className="font-pmedium text-sm text-gray-100">Welcome back</Text>
                        <Text className="font-psemibold text-2xl text-white">{user?.username}</Text>
                    </View>
                    <View className="mt-1.5">
                        <Image source={images.climbr}
                            className="w-14 h-14"
                            resizeMode="contain"
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
        /**<SafeAreaView className="bg-primary h-full">
            <FlatList
                data={[]}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => (
                    <Text className="text-3xl text-white">{item.id}</Text>
                )}
                ListHeaderComponent={() => (
                    <View className="my-6 px-4 space-y-6">
                        <View className="justify-between items-start flex-row mb-6">
                            <View>
                                <Text className="font-pmedium text-sm text-gray-100">Welcome back</Text>
                                <Text className="font-psemibold text-2xl text-white">caca</Text>
                            </View>
                            <View className="mt-1.5">
                                <Image source={images.climbr}
                                    className="w-14 h-14"
                                    resizeMode="contain"
                                />
                            </View>
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

        </SafeAreaView> **/
    )
}
//<StatusBar backgroundColor='#1F1F2A' style='light' />
export default Home