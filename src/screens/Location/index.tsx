import { Image, ScrollView, Text, View } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';

import { selectLocations } from '../../redux/selectors/loaction';
import Categories from './components/Categories';
import LocationCard from './components/LocationCard';
import styles from './styles';

const Location = () => {
  const locations = useSelector(selectLocations);
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
        <Categories />

        <ScrollView
          horizontal
          contentContainerStyle={styles.padding}
          showsHorizontalScrollIndicator={false}
          pt={4}>
          <View style={styles.flexColumn}>
            {locations.map((location, index) => (
              <LocationCard key={index} location={location} />
            ))}
          </View>
        </ScrollView>

        <ScrollView
          horizontal
          contentContainerStyle={styles.padding}
          showsHorizontalScrollIndicator={false}
          pt={4}>
          <View style={styles.flexColumn}>
            {locations.map((location, index) => (
              <LocationCard key={index} location={location} />
            ))}
          </View>
        </ScrollView>

        <ScrollView
          horizontal
          contentContainerStyle={styles.padding}
          showsHorizontalScrollIndicator={false}
          pt={4}>
          <View style={styles.flexColumn}>
            {locations.map((location, index) => (
              <LocationCard key={index} location={location} />
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Location;
