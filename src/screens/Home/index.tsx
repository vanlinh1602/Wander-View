import React, { useLayoutEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  Flex,
  VStack,
  Divider,
  Box,
  Input,
  ScrollView,

} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntIcon from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Categories from '../../components/Categories';
import FeaturedRow from '../../components/FeaturedRow';

const Home = () => {
  // const navigation= useNavigation();

  // useLayoutEffect(() =>{
  //   navigation.setOptions({

  //   })
  // },[])


  return (
<SafeAreaView>
  {/*Header*/}
  <Flex  direction='row' safeAreaTop backgroundColor={"white"}>

    <View margin={2} flex={1}>
      <Text fontWeight={'bold'} fontSize={24} color={"black"}> Hello <Text color={'orange.600'}>Traveler!</Text></Text>
      <Text fontWeight={'bold'} fontSize={18} color={"gray.400"}> Let's discover a new <Text color={"purple.600"}>adventure</Text> </Text>

    </View>

    <View margin={2} alignItems={'center'}>
      <Image h={16} w={16} borderRadius={100}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiKUBafiNEc-HcMtgslV-6hCBtBrsBxYM5Bc75D_RB2FA45GvKzJi2py20b6BlwK3LadY&usqp=CAU"
        }}
        alt="Alternate Text"
      />
    </View>
  </Flex>


  {/*Searching*/}
<View bgColor={"white"}>
  <VStack my="3" space={5} w="100%" maxW="500px" divider={<Box px="2">
          <Divider />
        </Box>}>
      <VStack w="85%" space={5} alignSelf="center">
        <Input placeholder="Search" variant={'filled'} width="97%" shadow={4} borderRadius="20" py="2" px="5" InputLeftElement={<EvilIcons name='search' color="black" size={40}  />}
        />
      </VStack>
  </VStack>
</View>

    {/*Body*/}
<ScrollView
  bgColor={'gray.100'}
  contentContainerStyle={{
    paddingBottom: 100,
  }}
>
{/*Category*/}
  <Categories/>

{/*Feature Row*/}
 <FeaturedRow
    id="1"
    title= "Featured"
    description =" Something you may like"
 />

{/*Trending Row*/}
<FeaturedRow
    id="2"
    title= "Trend"
    description =" Locations that people love"
 />

{/*Top Visit Row*/}
<FeaturedRow
    id="3"
    title= "Top visit"
    description =" Everyone best choice!"
 />

{/*Le duoi cua Home*/}
<View>
  <Text fontSize={42}>hello</Text>
</View>

</ScrollView>
</SafeAreaView>

  )
};
export default Home;
