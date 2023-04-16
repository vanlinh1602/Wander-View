import React from 'react';
import { ScrollView, View } from 'native-base';
import CategoryCard from './CategoryCard';

const Categories = () => {

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* CategoryCard*/}
      <View flexDirection={'row'} >
      <CategoryCard
        imgUrl="https://cdn-icons-png.flaticon.com/512/10397/10397062.png"
        title = "Camping"/>
      <CategoryCard
        imgUrl="https://cdn-icons-png.flaticon.com/512/4336/4336883.png"
        title = "Beach"/>
      <CategoryCard
        imgUrl="https://cdn-icons-png.flaticon.com/512/10180/10180302.png"
        title = "Kayak"/>
      <CategoryCard
        imgUrl="https://cdn-icons-png.flaticon.com/512/2847/2847264.png"
        title = "Mount"/>
      <CategoryCard
        imgUrl="https://cdn-icons-png.flaticon.com/512/2321/2321588.png"
        title = "Forest"/>
      </View>

    </ScrollView>
  );
};

export default Categories;