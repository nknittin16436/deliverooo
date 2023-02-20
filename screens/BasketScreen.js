import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { urlFor } from '../sanity';

const BasketScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const restaurant = useSelector(selectRestaurant);
    const basketTotal = useSelector(selectBasketTotal)
    const items = useSelector(selectBasketItems);
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);


    useEffect(() => {

        const groupedItems = items.reduce((results, item) => {
            (results[item._id] = results[item._id] || []).push(item);
            return results;
        }, {})

        setGroupedItemsInBasket(groupedItems);

    }, [items])


    console.log(groupedItemsInBasket)
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-gray-100r">
                <View className="p-5 border-b border-[#00ccbb] bg-white shadow-xs">
                    <View>
                        <Text className="text-lg text-center font-bold">Basket</Text>
                        <Text className="text-gray-400 text-center">{restaurant.title}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="rounded-full bg-gray-100 absolute top-5 right-5">
                        <MaterialIcons name="cancel" size={35} color="#00CCBB" />
                    </TouchableOpacity>
                </View>
                <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                    <Image
                        source={{
                            uri: "https://links.papareact.com/wru"
                        }}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />
                    <Text className="flex-1">Delivery in 50-75 minutes</Text>
                    <TouchableOpacity>
                        <Text className="text-[#00CCBB]">Change</Text>
                    </TouchableOpacity>
                </View>


                <ScrollView className="divide-y divide-gray-200">
                    {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                        <View
                            key={key}
                            className="flex-row items-center space-x-3 bg-white py-2 px-5"
                        >
                            <Text className="text-[#00CCBB]">{items.length} x</Text>
                            <Image
                                source={{
                                    uri: urlFor(items[0]?.image).url()
                                }}
                                className="h-12 w-12 rounded-full"
                            />
                            <Text className="flex-1">{items[0]?.name}</Text>
                            <Text className="text-gray-600">₹ {items[0]?.price}</Text>
                            <TouchableOpacity
                                onPress={() => dispatch(removeFromBasket({ id: key }))}
                            >
                                <Text
                                    className="text-xs text-[#00CCBB]"
                                >
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                <View className="p-5 bg-white space-y-4">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">₹ {basketTotal}</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Delivery Charges</Text>
                        <Text className="text-gray-400">₹ 40</Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text>Order Total</Text>
                        <Text className="font-extrabold">₹ {basketTotal + 40}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('PreparingOrderScreen')}
                        className="rounded-lg p-4 bg-[#00CCBB]">
                        <Text className="text-white text-center text-lg font-bold">Place Order</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </SafeAreaView>
    )
}

export default BasketScreen