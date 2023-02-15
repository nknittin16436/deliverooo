import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <SafeAreaView className="bg-white pt-3">
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <View className='flex-1'>
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">Current Location
                        <Entypo name="chevron-down" size={20} color="#00CCBB" />
                    </Text>
                </View>
                <FontAwesome5 name="user" size={25} color="#00CCBB" />
            </View>


            {/* Search */}

            <View className="flex-row items-center space-x-2 pb-2  mx-4">
                <View className="flex-row items-center space-x-2 bg-gray-200 p-3 flex-1">
                    <Ionicons name="ios-search-outline" size={20} color="gray" />
                    <TextInput
                        placeholder='Restaurnats and Cuisines'
                        keyboardType='default'
                    />
                </View>
                <FontAwesome name="exchange" size={24} color="#00CCBB" />
            </View>


            {/* Categories */}
            <ScrollView className="bg-gray-100" showsVerticalScrollIndicator={false}>
                {/* categories */}

                <Categories />
                {/* Featured */}

                <FeaturedRow
                    id="123"
                    title="Featured"
                    description="Paid placements from our partner"
                />
                <FeaturedRow
                    id="1234"
                    title="Tasty Dicounts"
                    description="Paid placements from our partner"
                />
                <FeaturedRow
                    id="1235"
                    title="Offers only for you"
                    description="Paid placements from our partner"
                />

                
            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen