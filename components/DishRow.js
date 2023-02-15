import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity';
import { FontAwesome5 } from '@expo/vector-icons';

const DishRow = ({ dish }) => {
    const [isPressed, setIsPressed] = useState(false)
    return (
        <>
            <TouchableOpacity className={`bg-white p-4 border border-gray-200 ${isPressed && "border-b-0"}`}
                onPress={() => setIsPressed(!isPressed)}>
                <View className="flex-row">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{dish.name}</Text>
                        <Text className="text-gray-400">{dish.short_description}</Text>
                        <Text className="text-gray-400 mt-2">₹-{dish.price}</Text>
                    </View>
                    <View>
                        <Image
                            style={{
                                borderWidth: 1,
                                borderColor: "#F3F3F4"
                            }}
                            source={{
                                uri: urlFor(dish.image).url()
                            }}
                            className="w-20 h-20 bg-gray-300 p-4"
                        />
                    </View>
                </View>
            </TouchableOpacity>

            {
                isPressed && (
                    <View className="bg-white px-4">
                        <View className="flex-row items-center space-x-2 pb-2">
                            <TouchableOpacity>
                                <FontAwesome5 name="minus-circle" size={24} color="#00CCBB" />
                            </TouchableOpacity>
                            <Text>0</Text>
                            <TouchableOpacity>
                                <FontAwesome5 name="plus-circle" size={24} color="#00CCBB" />
                            </TouchableOpacity>

                        </View>
                    </View>
                )
            }
        </>
    )
}

export default DishRow