import { View, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'react-native';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {

    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })
    return (
        <View className="flex-1 bg-[#00CCBB]">
            <SafeAreaView className="z-50">
                <View className="flex-row justify-between p-5 items-center" >
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <MaterialIcons name="cancel" size={30} color="white" />
                    </TouchableOpacity>

                    <Text className="text-lg font-light text-white">Order Help</Text>
                </View>
                <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                    <View className="flex-row justify-between">

                        <View cla>
                            <Text className="text-lg text-gray-400">Esimated Arrival</Text>
                            <Text className="text-3xl font-bold">40-55 Minutes</Text>
                        </View>
                        <Image
                            source={{ uri: "https://links.papareact.com/fls" }}
                            className="h-20 w-20"
                        />
                    </View>
                    <Progress.Bar width={150} indeterminate={true} color="#00CCBB" />
                    <Text className="mt-3 text-gray-500">Your order at {restaurant.title} is being Prepared</Text>
                </View>
            </SafeAreaView>
            <MapView
                initialRegion={{
                    longitude: restaurant.long,
                    latitude: restaurant.lat,
                    longitudeDelta: 0.005,
                    latitudeDelta: 0.005

                }}
                className="flex-1 mt-10 z-0"
                mapType='mutedStandard'
            >

                <Marker
                    coordinate={{
                        longitude: restaurant.long,
                        latitude: restaurant.lat

                    }}
                    title={restaurant.title}
                    description={restaurant.short_description}
                    identifier='origin'
                    pinColor='#00CCBB'
                />
            </MapView>

            <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    className="h-12 w-12 p-4 rounded-full ml-5 bg-gray-300"
                />
                <View className="flex-1">
                    <Text className="text-lg">
                        Nand Kumar
                    </Text>
                    <Text className="text-gray-400">
                        Your Rider
                    </Text>
                </View>
                <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
            </SafeAreaView>
        </View>
    )
}

export default DeliveryScreen