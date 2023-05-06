import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import type { Location } from './type';

type Props = {
  location: Location;
};

const LocationCard = ({ location }: Props) => {
  return (
    <TouchableOpacity key={location.imgUrl} style={styles.locationCard}>
      <Image
        style={styles.imageLocation}
        source={{
          uri: location.imgUrl,
        }}
      />
      <View style={styles.paddingView}>
        <Text style={styles.locationTitle}>{location.title}</Text>

        <View style={styles.locationView}>
          <AntIcon name="star" color="green" size={20} />
          <Text style={styles.locationRating}>
            <Text style={styles.greenText}>{location.rating}</Text> .{' '}
            {location.genre}
          </Text>
        </View>

        <View style={styles.addressView}>
          <AntIcon name="enviroment" color="gray" size={20} />
          <Text style={styles.locationAddress}>
            {' '}
            Nearby .{location.address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LocationCard;
