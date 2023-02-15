import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

const Categories = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >

            <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing 1"/>
            <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing 2"/>
            <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing 3"/>
            <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing 4"/>
            <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing 5"/>
        </ScrollView>
    );
}


export default Categories;
