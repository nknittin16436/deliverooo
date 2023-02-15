import React from "react";
import { View, Text, ScrollView } from "react-native";
import RestaurantCard from "./RestaurantCard.js";
import { AntDesign } from '@expo/vector-icons';
const FeaturedRow = ({ id, title, description }) => {
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
                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/wru"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japenese"
                    address="1234 Main street"
                    short_description="This ia s japnese restaurant"
                    dishes={[]}
                    long={20}
                    lat={30}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/wru"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japenese"
                    address="1234 Main street"
                    short_description="This ia s japnese restaurant"
                    dishes={[]}
                    long={20}
                    lat={30}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/wru"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japenese"
                    address="1234 Main street"
                    short_description="This ia s japnese restaurant"
                    dishes={[]}
                    long={20}
                    lat={30}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/wru"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japenese"
                    address="1234 Main street"
                    short_description="This ia s japnese restaurant"
                    dishes={[]}
                    long={20}
                    lat={30}
                />
            </ScrollView>
        </View>
    );
};


export default FeaturedRow;
