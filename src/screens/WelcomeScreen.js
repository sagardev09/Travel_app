import { View, Text, Image, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
    const navigation = useNavigation()
    return (
        <View className="flex-1 flex justify-end">
            <Image source={require("../../assets/images/welcome.png")} className="h-full w-full absolute" />
            <View className="p-5 pb-10 space-y-8">
                <LinearGradient
                    colors={["transparent", "rgba(3,105,161,0.8)"]}
                    style={{ height: hp(60), width: wp(100) }}
                    start={{ x: 0.5, y: 0.5 }}
                    end={{ x: 0.5, y: 1 }}
                    className="absolute bottom-0"
                />
                <View className="space-y-3">
                    <Text className="text-white text-5xl font-bold capitalize" style={{ fontSize: wp(10) }}>travelling made easy!</Text>
                    <Text className="font-medium text-neutral-200" style={{ fontSize: wp(4) }}>
                        We are a travel agency that helps you find the best deals for your next trip!
                    </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Home")} className="bg-orange-500 mx-auto px-12 py-4 rounded-full">
                    <Text className="text-white font-bold" style={{ fontSize: wp(5) }}>Let's go!</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}