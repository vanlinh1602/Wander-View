import { HStack } from 'native-base';
import React from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const listComment = [
  {
    id: '1',
    user_image:
      'https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=750w ',
    user_name: 'KhanhPham',
    user_comment: 'Very good',
    user_star: 4,
  },
  {
    id: '2',
    user_image:
      'https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=750w',
    user_name: 'KhanhPham',
    user_comment: 'Very good',
    user_star: 5,
  },
  {
    id: '3',
    user_image:
      'https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=750w',
    user_name: 'KhanhPham',
    user_comment: 'Very good',
    user_star: 5,
  },
  {
    id: '4',
    user_image:
      'https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=750w',
    user_name: 'KhanhPham',
    user_comment: 'Very good',
    user_star: 5,
  },
];

type Props = {
  navigation: any;
};

const LocationReview = ({ navigation }: Props) => {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Icon
          onPress={() => (navigation as Navigation).goBack()}
          name="arrow-back-ios"
          size={23}
          color={'##1a1818'}
        />
      </View>
      <View>
        <FlatList
          data={listComment}
          renderItem={item => (
            <View style={styles.itemWrapperStyle}>
              <Image
                style={styles.itemImageStyle}
                source={{ uri: item.item.user_image }}
              />
              <View style={styles.contentWrapperStyle}>
                <Text style={styles.txtNameStyle}>{item.item.user_name}</Text>
                <HStack>
                  {[1, 2, 3, 4, 5].map(star => (
                    <Icon
                      name="star"
                      color={
                        star <= item.item.user_star ? 'orange' : 'lightgrey'
                      }
                    />
                  ))}
                </HStack>
                <Text style={styles.txtEmailStyle}>
                  {item.item.user_comment}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
};
export default LocationReview;
