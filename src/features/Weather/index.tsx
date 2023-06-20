import { get } from 'lodash';
import moment from 'moment';
import { Avatar, Center, HStack, Text, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GetAddressString } from '../../lib/common';
import { MaterialCommunityIcons, MaterialIcons } from '../../lib/icons';
import { weather_field } from '../../lib/options';
import { actions } from '../../redux/reducers/location';
import { selectLocationsWeather } from '../../redux/selectors/loaction';
import type { Location } from '../../types/loaction';
import type { WeatherResult } from '../../types/weather';

type Props = {
  navigation: any;
  route: any;
};

export const Weather = ({ navigation, route }: Props) => {
  const { location }: { location: Location } = (route as Route).params;
  const weathers = useSelector(selectLocationsWeather);
  const [weather, setWeather] = useState<WeatherResult>();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!weathers?.[location.id]) {
      const cityName = GetAddressString(location.address);
      dispatch(
        actions.getWeatherResult({
          id: location.id,
          location: cityName.split(', ').shift() ?? '',
        }),
      );
    } else {
      setWeather(weathers[location.id]);
    }
  }, [weathers, dispatch, location]);

  return weather ? (
    <View height="full" backgroundColor="white">
      <View
        mb={5}
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <MaterialIcons
          onPress={() => navigation.goBack()}
          name="arrow-back-ios"
          size={28}
          color={'#000'}
        />
      </View>
      <Center>
        <Text fontSize={20}>
          {moment(weather?.location.localtime).format('MMMM Do YYYY')}
        </Text>
        <Text color="orange.400" fontSize={25} textAlign="center" paddingX={5}>
          {GetAddressString(location.address)}
        </Text>
      </Center>
      <Center>
        <HStack space={5} alignItems="center" mb={5} mt={5}>
          <View>
            <Text fontSize={50}>{weather?.current.temp_c}°C</Text>
            <Text fontSize={16}>{weather?.current.condition.text}</Text>
          </View>
          <Avatar
            size={150}
            source={{
              uri: `https:${weather?.current.condition.icon}`,
            }}
          />
        </HStack>
      </Center>
      <View
        height="1/3"
        backgroundColor="purple.300"
        style={{
          marginHorizontal: 20,
          padding: 20,
          borderRadius: 24,
        }}>
        {weather_field.map(field => (
          <View
            key={field.key}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text fontSize={24}>
              <MaterialCommunityIcons size={24} name={field.icon} />
              {field.name}
            </Text>
            <Text fontSize={24}>
              {get(weather, ['current', field.key])} {field.extend}
            </Text>
          </View>
        ))}
      </View>
    </View>
  ) : (
    <View>
      <Text />
    </View>
  );
};
