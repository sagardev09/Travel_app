import { View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon, ClockIcon, HeartIcon, MapPinIcon, SunIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

export default function DestinationScreen(props) {
    const navigation = useNavigation()
    const [isLiked, setIsLiked] = useState(false)
    const items = props.route.params
    return (
        <View className="flex-1 bg-white">
            <Image source={items.image} style={{ height: hp(55), width: wp(100) }} />
            <StatusBar style='light' />
            <SafeAreaView className="w-full flex-row justify-between items-center absolute">
                <TouchableOpacity onPress={() => navigation.navigate("Home")} className="rounded-full p-2 ml-4" style={{ backgroundColor: "rgba(225,225,225,0.5)" }}>
                    <ChevronLeftIcon color={"white"} size={wp(7)} strokeWidth={4} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsLiked(!isLiked)} className="rounded-full p-2 mr-4" style={{ backgroundColor: "rgba(225,225,225,0.5)" }}>
                    <HeartIcon size={wp(7)} color={isLiked ? "red" : "white"} />
                </TouchableOpacity>
            </SafeAreaView>
            <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }} className="px-5 flex flex-1 bg-white pt-8 justify-between -mt-14">
                <ScrollView showsVerticalScrollIndicator={false} className="space-y-5">
                    <View className="flex-row justify-between items-start">
                        <Text style={{ fontSize: wp(7) }} className="font-bold flex-1 text-neutral-700">{items?.title}</Text>
                        <Text style={{ fontSize: wp(7), color: "#f97316" }} className="font-bold">${items?.price}</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: wp(3.7) }} className="tracking-wide mb-2 text-neutral-700">{items.longDescription}</Text>
                    </View>
                    <View className="flex-row justify-between items-center mx-1">
                        <View className="flex-row space-x-2 items-start">
                            <ClockIcon size={wp(7)} color={"skyblue"} />
                            <View className="flex space-y-2">
                                <Text style={{ fontSize: wp(4.5) }} className="font-bold text-neutral-700">{items.duration}</Text>
                                <Text style={{ fontSize: wp(4) }} className="text-neutral-600 tracking-wide">Duration</Text>
                            </View>
                        </View>
                        <View className="flex-row space-x-2 items-start">
                            <MapPinIcon size={wp(7)} color={"red"} />
                            <View className="flex space-y-2">
                                <Text style={{ fontSize: wp(4.5) }} className="font-bold text-neutral-700">{items.distance}</Text>
                                <Text style={{ fontSize: wp(4) }} className="text-neutral-600 tracking-wide">Distance</Text>
                            </View>
                        </View>
                        <View className="flex-row space-x-2 items-start">
                            <SunIcon size={wp(7)} color={"orange"} />
                            <View className="flex space-y-2">
                                <Text style={{ fontSize: wp(4.5) }} className="font-bold text-neutral-700">{items.weather}</Text>
                                <Text style={{ fontSize: wp(4) }} className="text-neutral-600 tracking-wide">Sunny</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={{ height: wp(15), width: wp(50) }} className="mb-6 mx-auto flex justify-center items-center rounded-full bg-orange-400">
                    <Text style={{ fontSize: wp(5.2) }} className="text-white font-bold">Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}