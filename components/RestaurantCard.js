import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { Feather, AntDesign } from '@expo/vector-icons';
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";
const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {

    const navigation = useNavigation();
    return (

        <TouchableOpacity className="bg-white mr-3 shadow" onPress={() => navigation.navigate("Restaurant", {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat,
        })}>
            <Image className="h-36 w-64 rounded-sm" source={{ uri: urlFor(imgUrl).url() }} />
            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">
                    {title}
                </Text>
                <View className="flex-row items-center space-x-1">
                    <AntDesign name="star" size={22} color="green" />
                    <Text className="text-xs text-gray-500">

                        <Text className="text-green-500">{rating}</Text> . {genre}
                    </Text>
                </View>
                <View className="flex-row space-x-2 pt-2 items-center">
                    <Feather name="map-pin" size={24} color="gray" />
                    <Text className="text-xs text-gray-500">Nearby . {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};


export default RestaurantCard;
