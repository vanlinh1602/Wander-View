import { ScrollView, View } from 'native-base';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

import { categories } from '../../lib/options';
import S from './styles';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={S.scrollView}>
      <View flexDirection={'row'}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={S.touchableOpacity}>
            <View style={S.view}>
              <Image
                source={{
                  uri: category.imgUrl,
                }}
                style={S.image}
              />
              <Text style={S.text}>{category.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Categories;
