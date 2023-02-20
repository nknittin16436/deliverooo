import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';

const PreparingOrderScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })

        setTimeout(() => {
            navigation.navigate('DeliveryScreen')
        }, 5000);
    }, []);
    return (
        <SafeAreaView className="bg-[#094e73] flex-1 justify-center items-center">
            <Animatable.Image
                source={require('../assets/orderLoading.gif')}
                animation="slideInUp"
                iterationCount={1}
                className="h-80 w-80"
            />

            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className="text-lg my-10 text-white font-bold text-center"
            >
                Waiting for Restaurant to Confirm Your Order
            </Animatable.Text>
            <Progress.Circle size={60} indeterminate={true} color='white' />
        </SafeAreaView>
    )
}

export default PreparingOrderScreen