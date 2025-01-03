import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView } from 'react-native';
import "../assets/global.css";
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import { Redirect, router } from 'expo-router';
import CustomButton from '@/components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full min-h-[85vh] justify-start items-center px-4">
          <Image
            source={images.climbr}
            className="w-[200px] h-[200px] mt-10"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">Track Your Climbs With{' '} <Text className="text-secondary-200">Climbr!</Text></Text>
          </View>
          <Text className="text-base font-pregular text-gray-100 mt-7 text-center">Reach new heights, one climb at a time. With every step, Climbr helps you track your progress and stay inspired.
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#1F1F2A' style='light' />
    </SafeAreaView>
  );
}

