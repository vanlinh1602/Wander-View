import { Image, ScrollView, Text, View } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Categories from './components/Categories';
import LocationCard from './components/LocationCard';
import type { CategoryCard, Location as LocationInfo } from './components/type';
import styles from './styles';
const categories: CategoryCard[] = [
  {
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/10397/10397062.png',
    title: 'Camping',
  },
  {
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/4336/4336883.png',
    title: 'Beach',
  },
  {
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/10180/10180302.png',
    title: 'Kayak',
  },
  {
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/2847/2847264.png',
    title: 'Mount',
  },
  {
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/2321/2321588.png',
    title: 'Forest',
  },
];

const locations: LocationInfo[] = [
  {
    imgUrl:
      'https://topdiemden.com/wp-content/uploads/2019/10/bitexco.jpg?x72370',
    title: 'District 1',
    rating: '5.0',
    genre: 'District',
    address: 'Ho Chi Minh City',
  },
  {
    imgUrl:
      'https://vtv1.mediacdn.vn/zoom/550_339/2023/1/10/thu-duc-plo-1673355410024295339330-crop-1673355428804803098228.jpeg',
    title: 'Thu Duc City',
    rating: '5.0',
    genre: 'City',
    address: 'Ho Chi Minh City',
  },
  {
    imgUrl:
      'https://file4.batdongsan.com.vn/2022/09/28/PHJN6Zw0/20220928142250-2078.jpg',
    title: 'Binh Thanh District',
    rating: '5.0',
    genre: 'Disttrict',
    address: 'Ho Chi Minh City',
  },
  {
    imgUrl:
      'https://cdn1.tuoitre.vn/zoom/600_315/tto/i/s626/2015/12/27/cu-chi-4-jpg-1451209904.jpg',
    title: 'Cu Chi District',
    rating: '4.0',
    genre: 'Disttrict',
    address: 'Ho Chi Minh City',
  },
];

const Location = () => {
  return (
    <SafeAreaView>
      <View style={styles.flex}>
        <TouchableOpacity style={styles.welcomeView}>
          <AntDesign name="left" color="purple" size={50} />
        </TouchableOpacity>

        <View style={styles.avaView}>
          <Image
            style={styles.avaImage}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiKUBafiNEc-HcMtgslV-6hCBtBrsBxYM5Bc75D_RB2FA45GvKzJi2py20b6BlwK3LadY&usqp=CAU',
            }}
            alt="Alternate Text"
          />
        </View>
      </View>

      <View style={styles.locationBar}>
        <Text style={styles.locationName}>Ho Chi Minh</Text>
        <Text style={styles.pickLocation} fontSize={15} marginLeft={10}>
          Location
        </Text>
        <TouchableOpacity style={styles.pickLocation}>
          <AntDesign name="ellipsis1" color="purple" size={40} />
        </TouchableOpacity>
      </View>

      <ScrollView
        bgColor={'gray.100'}
        contentContainerStyle={styles.paddingBottom}>
        <Categories categories={categories} />

        <ScrollView
          horizontal
          contentContainerStyle={styles.padding}
          showsHorizontalScrollIndicator={false}
          pt={4}>
          <View style={styles.flexColumn}>
            {locations.map(location => (
              <LocationCard location={location} />
            ))}
          </View>
        </ScrollView>

        <ScrollView
          horizontal
          contentContainerStyle={styles.padding}
          showsHorizontalScrollIndicator={false}
          pt={4}>
          <View style={styles.flexColumn}>
            {locations.map(location => (
              <LocationCard location={location} />
            ))}
          </View>
        </ScrollView>

        <ScrollView
          horizontal
          contentContainerStyle={styles.padding}
          showsHorizontalScrollIndicator={false}
          pt={4}>
          <View style={styles.flexColumn}>
            {locations.map(location => (
              <LocationCard location={location} />
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Location;
