import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl,title}: any) => {
  return (
    <TouchableOpacity
      style={{elevation:9}}
    >
      <View style={{alignContent:'space-between', alignItems:'center'}}>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={{height:70,width:70, borderRadius:5, marginLeft:9,marginRight:12}}

      />
      <Text
        style={{fontSize:15,fontWeight:'bold',color:'black', marginTop:2, marginBottom:10}}
      > {title} </Text>

      </View>
    </TouchableOpacity>
  )
}

export default CategoryCard