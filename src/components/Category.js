import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { categoriesData } from "../constants/index"

export default function Category() {
    return (
        <View className="space-y-5 mt-4">
            <View className="mx-5 flex-row justify-between items-center">
                <Text className="font-semibold text-neutral-700" style={{ fontSize: wp(4) }}>Categories</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: wp(4), color: "#f97316" }}>See all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15 }}
                className="space-x-4"
                showsHorizontalScrollIndicator={false}>

                {
                    categoriesData.map((cat, index) => (
                        <TouchableOpacity key={index} className="flex items-center space-y-2">
                            <Image source={cat.image} className="rounded-3xl" style={{ height: wp(20), width: wp(19) }} />
                            <Text className="text-neutral-700 font-medium" style={{ fontSize: wp(3) }}>{cat.title}</Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    )
}