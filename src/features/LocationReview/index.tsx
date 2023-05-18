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
const starArray = [1, 2, 3, 4, 5].map(i => i);

const Rating = ({ key, rating }: { key: string; rating: boolean }) => (
  <Icon key={key} name="star" color={rating ? 'orange' : 'lightgrey'} />
);

const LocationReview = () => {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={23} color={'##1a1818'} />
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
                <Text style={styles.txtEmailStyle}>
                  {item.item.user_comment}
                </Text>
                <div>
                  {starArray.map(star => (
                    <Rating
                      key={star.toString()}
                      rating={star < item.item.user_star}
                    />
                  ))}
                </div>
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
