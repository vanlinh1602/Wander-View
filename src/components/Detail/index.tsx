import React, { useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import S from './styles';
import { locations } from '../../lib/assets';
import { Fontisto } from '../../lib/icons';
import { ScrollView } from 'native-base';
const Catalog = [
  { id: '1', icon: 'tent', title: 'Camping' },
  { id: '2', icon: 'island', title: 'Beach' },
  {
    id: '3',
    icon: 'sait-boat',
    title: 'Kayak          ',
  },
  { id: '4', icon: 'area-chart', title: 'Mountains' },
];
const handlepress = () => {
  console.log('Button Pressed');
};
type Prop = {
  image: string;
  name: string;
  location: string;
  rating: number;
  description: string;
};

const Detail = ({ image, name, location, rating, description }: Prop) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ImageBackground style={{ flex: 0.45 }} source={{ uri: image }}>
        <View style={S.header}>
          <Icon name="arrow-back-ios" size={28} color={'#fff'} />
          <Icon name="favorite" size={28} color={'#eb34de'} />
        </View>
        <View style={S.imageDetails}>
          <Text
            style={{
              width: '70%',
              fontSize: 30,
              fontWeight: 'bold',
              color: '#FFF',
              marginBottom: 20,
            }}>
            {name}
          </Text>
        </View>
        <View style={S.imageLocation}>
          <Icon name="place" size={28} color={'#fff'} />
          <Text
            style={{
              width: '90%',
              fontSize: 20,
              color: '#FFF',
              marginBottom: 10,
              marginRight: 100,
            }}>
            {location}
            {'    '}
            <Icon style={S.icon} name="star" size={20} color={'#fff'} />
            <Text
              style={{
                width: '70%',
                fontSize: 20,
                color: '#fff',
                alignItems: 'center',
              }}>
              {rating}
            </Text>
          </Text>
        </View>
      </ImageBackground>
      <View style={S.detailsContainer}>
        <Text
          style={{
            color: '#6111c2',
            marginTop: 20,
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          Description
        </Text>
        <Text style={{ marginTop: 20, lineHeight: 22, fontSize: 18 }}>
          {description}
        </Text>
        <View>
          <FlatList
            data={Catalog}
            renderItem={item => (
              <View style={S.container}>
                <Text style={S.title}>
                  <Fontisto name={item.item.icon} size={40} color={'#df96de'} />{' '}
                  {item.item.title}
                </Text>
              </View>
            )}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        </View>
      </View>

      <View style={S.footer}>
        <View style={S.bookNowBtn}>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
            Add plan
          </Text>
        </View>
        <TouchableOpacity onPress={handlepress}>
          <View style={S.bookNowBtn}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
              Review
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Detail;
