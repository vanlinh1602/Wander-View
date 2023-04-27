import { Image, ScrollView, Text, View } from 'native-base';
import React from 'react';
import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Categories from './components/Categories';
import FeaturedRow from './components/FeaturedRow';
import LocationCard from './components/LocationCard';
import type { CategoryCard, LocationCards } from './components/type';
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

const locations: LocationCards[] = [
  {
    imgUrl:
      'https://globalgrasshopper.com/wp-content/uploads/2011/11/Top-10-of-the-most-beautiful-places-to-visit-in-Vietnam.jpg',
    title: 'Heaven',
    rating: '4.5',
    genre: 'Mountain',
    address: ' 12 Suoi Tien',
  },
  {
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXQUcZ4vbrvWpgSJEZ3DEVDnx_ZqQTojyeo6ksrLdapFAIOZetsRls3isNUFgjFnfoh3M&usqp=CAU',
    title: ' Waterfall',
    rating: '4.0',
    genre: 'Mountain',
    address: '43 Long Coast',
  },
  {
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9s_zZrFrYU4J9pEMWyjKdupraMMxXyPsFZg&usqp=CAU',
    title: 'Jurasic Park',
    rating: '4.0',
    genre: 'Camping',
    address: ' 5 Mars',
  },
];

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.flex}>
        <View style={styles.welcomeView}>
          <Text style={styles.helloLine}>
            Hello <Text style={styles.orangeText}>Traveler!</Text>
          </Text>
          <Text style={styles.introLine}>
            Let's discover a new{' '}
            <Text style={styles.purpleText}>adventure</Text>
          </Text>
        </View>

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

      <View style={styles.searchBar}>
        <Image
          source={{ uri: 'https://img.icons8.com/stickers/256/search.png' }}
          style={styles.imageInput}
          resizeMode="center"
          alt="Alternate Text"
        />
        <TextInput
          style={styles.inputLocation}
          placeholder="Input Location"
          placeholderTextColor={'gray'}
        />
      </View>

      <ScrollView
        bgColor={'gray.100'}
        contentContainerStyle={styles.paddingBottom}>
        <Categories categories={categories} />

        <FeaturedRow title="Featured" description=" Something you may like" />
        <ScrollView
          horizontal
          contentContainerStyle={styles.padding}
          showsHorizontalScrollIndicator={false}
          pt={4}>
          <LocationCard locations={locations} />
        </ScrollView>

        <FeaturedRow title="Trend" description=" Locations that people love" />
        <ScrollView
          horizontal
          contentContainerStyle={styles.padding}
          showsHorizontalScrollIndicator={false}
          pt={4}>
          <LocationCard locations={locations} />
        </ScrollView>

        <FeaturedRow title="Top visit" description=" Everyone best choice!" />
        <ScrollView
          horizontal
          contentContainerStyle={styles.padding}
          showsHorizontalScrollIndicator={false}
          pt={4}>
          <LocationCard locations={locations} />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
