import { View, Text } from 'react-native'
import React from 'react'

import { destinationData } from "../constants/index"
import DestinationCard from './DestinationCard'
import { useNavigation } from '@react-navigation/native'

export default function Destination() {
    const navigation = useNavigation()
    return (
        <View className="mx-4 mt-4 flex-row justify-between flex-wrap">
            {
                destinationData.map((item, index) => {
                    return (
                        <DestinationCard item={item} navigation={navigation} index={index} />
                    )
                })
            }
        </View>
    )
}