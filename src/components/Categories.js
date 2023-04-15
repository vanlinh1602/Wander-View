//import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView,View,Text } from 'native-base'
import CategoryCard from './CategoryCard'

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
      {/*CategoryCard*/}
      <View flexDirection={'row'} >
      <CategoryCard
        imgUrl="https://otakuusamagazine.com/wp-content/uploads/2020/12/kuma-kuma-kuma-bearS2announce.jpg"
        title = "Camping"/>
      <CategoryCard
        imgUrl="https://otakuusamagazine.com/wp-content/uploads/2020/12/kuma-kuma-kuma-bearS2announce.jpg"
        title = "Beach"/>
      <CategoryCard
        imgUrl="https://otakuusamagazine.com/wp-content/uploads/2020/12/kuma-kuma-kuma-bearS2announce.jpg"
        title = "Kayak"/>
      <CategoryCard
        imgUrl="https://otakuusamagazine.com/wp-content/uploads/2020/12/kuma-kuma-kuma-bearS2announce.jpg"
        title = "Mount"/>
      <CategoryCard
        imgUrl="https://otakuusamagazine.com/wp-content/uploads/2020/12/kuma-kuma-kuma-bearS2announce.jpg"
        title = "Forest"/>
      </View>

    </ScrollView>
  )
}

export default Categories