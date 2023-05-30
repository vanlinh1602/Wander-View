import { Image, ScrollView, Text, View } from 'native-base';
import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';

import { LocationCard } from '../../components';
import { selectLocations } from '../../redux/selectors/loaction';
import styles from './styles';

type Props = {
  navigation: Navigation;
};

const Location = ({ navigation }: Props) => {
  const locations = useSelector(selectLocations);

  return (
    <SafeAreaView>
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

      <ScrollView bgColor="white" contentContainerStyle={styles.paddingBottom}>
        <View style={styles.locationBar}>
          <Text style={styles.locationName}>Ho Chi Minh</Text>
          <Text style={styles.pickLocation} fontSize={15} marginLeft={10}>
            Location
          </Text>
          <TouchableOpacity style={styles.pickLocation}>
            <AntDesign name="ellipsis1" color="purple" size={40} />
          </TouchableOpacity>
        </View>
        <View style={styles.flexColumn}>
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              location={location}
              navigation={navigation}
            />
          ))}
        </View>

        <View style={styles.flexColumn}>
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              location={location}
              navigation={navigation}
            />
          ))}
        </View>

        <View style={styles.flexColumn}>
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              location={location}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Location;
