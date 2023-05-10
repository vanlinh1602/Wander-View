import { Image, ScrollView, Text, View } from 'native-base';
import React from 'react';
import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { Categories, LocationCard } from '../../components';
import { selectLocations } from '../../redux/selectors/loaction';
import FeaturedRow from './components/FeaturedRow';
import styles from './styles';

const Home = () => {
  const locations = useSelector(selectLocations);

  return (
    <SafeAreaView>
      <View style={styles.flex} fontFamily="Roboto-Thin">
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
        <Categories />

        <FeaturedRow title="Featured" description=" Something you may like" />
        <ScrollView
          horizontal
          contentContainerStyle={styles.padding}
          showsHorizontalScrollIndicator={false}
          pt={4}>
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              location={location}
              miniCard
              style={{ marginRight: 10 }}
            />
          ))}
        </ScrollView>

        <FeaturedRow title="Trend" description=" Locations that people love" />
        <ScrollView
          horizontal
          contentContainerStyle={styles.padding}
          showsHorizontalScrollIndicator={false}
          pt={4}>
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              location={location}
              miniCard
              style={{ marginRight: 10 }}
            />
          ))}
        </ScrollView>

        <FeaturedRow title="Top visit" description=" Everyone best choice!" />
        <ScrollView
          horizontal
          contentContainerStyle={styles.padding}
          showsHorizontalScrollIndicator={false}
          pt={4}>
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              location={location}
              miniCard
              style={{ marginRight: 10 }}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
