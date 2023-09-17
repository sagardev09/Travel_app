import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { LinearGradient } from 'expo-linear-gradient'
import { HeartIcon } from "react-native-heroicons/solid"


export default function DestinationCard({ item, navigation }) {
    const [isLiked, setIsLiked] = useState(false)

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Destination", { ...item })} style={{ height: wp(65), width: wp(44) }} className="flex justify-end relative p-4 py-6 space-y-2 mb-5">
            <Image source={item.image} style={{ height: wp(65), width: wp(44), borderRadius: 35 }} className="absolute" />
            <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.8)"]}
                style={{ height: hp(15), width: wp(44), borderBottomLeftRadius: 35, borderBottomRightRadius: 35 }}
                start={{ x: 0.5, y: 0.5 }}
                end={{ x: 0.5, y: 1 }}
                className="absolute bottom-0"
            />
            <TouchableOpacity onPress={() => setIsLiked(!isLiked)} style={{ backgroundColor: "rgba(225,225,225,0.4)" }} className="absolute top-1 right-3 rounded-full p-3">
                <HeartIcon size={wp(5)} color={isLiked ? "red" : "white"} />
            </TouchableOpacity>
            <Text className="text-white font-semibold" style={{ fontSize: wp(4) }}>{item.title}</Text>
            <Text style={{ fontSize: wp(2.2) }} className="text-white">{item.shortDescription}</Text>
        </TouchableOpacity>
    )
}