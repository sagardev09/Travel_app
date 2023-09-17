import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { sortCategoryData } from "../constants/index"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function SortCategories() {
    const [activesort, setactivesort] = useState("Popular")
    return (
        <View className="flex-row justify-around items-center mx-4 bg-neutral-100 rounded-full p-2 px-4 space-x-2 mt-4">
            {
                sortCategoryData.map((item, index) => {
                    let isactive = item === activesort;
                    let activeButtonClass = isactive ? "bg-white shadow" : ""
                    return (
                        <TouchableOpacity onPress={() => setactivesort(item)} key={index} className={`p-3 px-4 rounded-full flex ${activeButtonClass}`}>
                            <Text className="font-semibold" style={{ fontSize: wp(3.5), color: isactive ? "#f97316" : "rgba(0,0,0,0.6)" }}>{item}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}