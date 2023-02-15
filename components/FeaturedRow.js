import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import RestaurantCard from "./RestaurantCard.js";
import { AntDesign } from '@expo/vector-icons';
import sanityClient from "../sanity.js";
const FeaturedRow = ({ id, title, description, restaurants }) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <AntDesign name="arrowright" size={28} color="#00CCBB" />
            </View>
            <Text className="text-xm text-gray-500 px-4">{description}</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    padding: 15,
                }}
                className="pt-4"
            >
                {/* RESTAURANT CARD */}


                {restaurants && restaurants.map((restaurant) => (

                    <RestaurantCard
                        key={restaurant._id}
                        id={restaurant._id}
                        imgUrl={restaurant.image}
                        title={restaurant.name}
                        rating={restaurant.rating}
                        genre={restaurant.type.name}
                        address={restaurant.address}
                        short_description={restaurant.short_description}
                        dishes={restaurant.dishes}
                        long={restaurant.long}
                        lat={restaurant.lat}
                    />
                ))}
            </ScrollView>
        </View>
    );
};


export default FeaturedRow;
