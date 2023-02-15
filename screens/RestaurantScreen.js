import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import sanityClient, { urlFor } from '../sanity';
import { AntDesign, Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import DishRow from '../components/DishRow';
const RestaurantScreen = () => {
    const navigation = useNavigation();
    const [dishes, setDishes] = useState([]);
    const { params: {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        long,
        lat,
    } } = useRoute()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    useEffect(() => {
        sanityClient.fetch(`
            *[_type == "restaurant" && _id==$id]{
                ...,
                dishes[]->
              }
      `, { id }).then(data => { console.log(data); setDishes(data[0].dishes) }).catch(error => console.log(error))
    }, []);
    return (
        <SafeAreaView>

            <ScrollView>
                <View className="relative">
                    <Image
                        source={
                            {
                                uri: urlFor(imgUrl).url()
                            }
                        }
                        className="w-full h-56 bg-gray-34 p-4"
                    />
                    <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-6 left-5 p-2 bg-gray-100 rounded-full">
                        <AntDesign name="arrowleft" size={24} color="#00CCBB" />
                    </TouchableOpacity>
                </View>

                <View className="bg-white">
                    <View className="px-4 pt-4">
                        <Text className="text-3xl font-bold">{title}</Text>
                        <View className="flex-row space-x-2 my-1">
                            <View className="flex-row items-center space-x-1">
                                <AntDesign name="star" size={16} color="green" />
                                <Text className="text-xs text-gray-500">

                                    <Text className="text-green-500">{rating}</Text> .{genre}{' '}
                                </Text>
                            </View>
                            <View className="flex-row items-center space-x-1">
                                <Feather name="map-pin" size={20} color="gray" />
                                <Text className="text-xs text-gray-500">
                                    {address}
                                </Text>
                            </View>
                        </View>
                        <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
                    </View>
                    <TouchableOpacity className="flex-row p-4 items-center space-x-2 border-y border-gray-300">
                        <AntDesign name="question" size={20} color="gray" />
                        <Text className="pl-2 flex-1 text-md font-bold"> Have a food alergy..?</Text>
                        <AntDesign name="right" size={24} color="#00CCBB" />
                    </TouchableOpacity>
                </View>

                <View>
                    <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>


                    {
                        dishes?.map((dish) => (
                            <DishRow key={dish._id} dish={dish} />
                        ))
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RestaurantScreen