import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import sanityClient from '../sanity';
import CategoryCard from './CategoryCard';

const Categories = () => {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        sanityClient.fetch(`
        *[_type=="category"]
      `).then(data => { console.log(data); setCategories(data) }).catch(error => console.log(error))
    }, [])

    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {categories?.map((category) => (

                <CategoryCard imgUrl={category.image} title={category.name} key={category._id} />
            ))}

        </ScrollView>
    );
}


export default Categories;
