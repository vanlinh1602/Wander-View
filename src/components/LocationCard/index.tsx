import React from 'react';
import { Image, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

import { GetAddressString } from '../../lib/common';
import type { Location } from '../../types/loaction';
import styles from './styles';

type Props = {
  location: Location;
  miniCard?: boolean;
  style?: ViewStyle;
  navigation: Navigation;
};

const LocationCard = ({
  location,
  miniCard,
  style = {},
  navigation,
}: Props) => {
  const imageSize = miniCard
    ? { height: 160, width: 260 }
    : { height: 234, width: 364 };
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('locationDetail', location)}
      style={{ ...styles.locationCard, ...style }}>
      <Image
        style={{ ...styles.imageLocation, ...imageSize }}
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
            {location.genre ?? 'Disttrict'}
          </Text>
        </View>

        <View style={styles.addressView}>
          <AntIcon name="enviroment" color="gray" size={20} />
          <Text style={styles.locationAddress}>
            {' '}
            Nearby .{GetAddressString(location.address, true)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LocationCard;
