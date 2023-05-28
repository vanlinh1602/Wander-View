import { ScrollView, Text, View } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';

import { Categories, LocationCard } from '../../components';
import { selectLocations } from '../../redux/selectors/loaction';
import styles from './styles';

type Props = {
  navigation: Navigation;
};

const Location = ({ navigation }: Props) => {
  const locations = useSelector(selectLocations);

  return (
    <SafeAreaView>
      <View style={styles.locationBar}>
        <Text style={styles.locationName}>Ho Chi Minh</Text>
        <Text style={styles.pickLocation} fontSize={15} marginLeft={10}>
          Location
        </Text>
        <TouchableOpacity style={styles.pickLocation}>
          <AntDesign name="ellipsis1" color="purple" size={40} />
        </TouchableOpacity>
      </View>

      <ScrollView bgColor="white" contentContainerStyle={styles.paddingBottom}>
        <Categories />

        <ScrollView
          horizontal
          contentContainerStyle={styles.padding}
          showsHorizontalScrollIndicator={false}
          pt={4}>
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

        <ScrollView
          horizontal
          contentContainerStyle={styles.padding}
          showsHorizontalScrollIndicator={false}
          pt={4}>
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

        <ScrollView
          horizontal
          contentContainerStyle={styles.padding}
          showsHorizontalScrollIndicator={false}
          pt={4}>
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
      </ScrollView>
    </SafeAreaView>
  );
};
export default Location;
