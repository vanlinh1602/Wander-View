import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import AntIcon from "react-native-vector-icons/AntDesign";
const LocationCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  activities,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity style={{backgroundColor:'white', elevation:9, marginRight:15}}>
      <Image
      style={{height:160,width:260,borderRadius:6}}
       source={{
        uri:imgUrl
       }}
      />
      <View style={{paddingHorizontal:3,paddingBottom:4}}>
        <Text style={{fontWeight:'bold',paddingTop:2,fontSize:25,color:'black'}}>{title}</Text>

      <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:10}}>
        <AntIcon name="star" color="green" size={20} />
        <Text style={{fontSize:15, fontWeight:'500',color:'gray'}}>
          <Text style={{color:'green'}}>{rating}</Text> . {genre}</Text>
      </View>

      <View style={{flexDirection:'row',marginTop:5,marginLeft:9}}>
        <AntIcon name="enviroment" color="gray" size={20} />
        <Text style={{fontSize:15,color:'gray'}}>Nearby . {address}</Text>
      </View>


      </View>
    </TouchableOpacity>
  )
}

export default LocationCard