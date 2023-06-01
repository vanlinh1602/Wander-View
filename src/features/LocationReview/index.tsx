import _ from 'lodash';
import { Avatar, HStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Waiting } from '../../components';
import { avatars } from '../../lib/assets';
import { Ionicons } from '../../lib/icons';
import { backendService } from '../../services';
import AddReview, { Review } from './AddReview';
import styles from './styles';

type Props = {
  navigation: any;
  route: any;
};

type CustomReview = Review & { id: string };

const LocationReview = ({ navigation, route }: Props) => {
  const { postId } = (route as Route).params;
  const [addReview, setAddReview] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [reviews, setReviews] = useState<CustomReview[]>([]);

  useEffect(() => {
    backendService
      .post<CustomObject<Review>>('api/getReviews', { postId })
      .then(result => {
        if (result.kind === 'ok') {
          const data = result.data;
          const dataReviews: CustomReview[] = Object.entries(data ?? {}).map(
            ([id, review]) => ({
              ...review,
              id,
            }),
          );
          setReviews(dataReviews);
        }
      });
  }, [postId]);

  return (
    <ScrollView>
      {loading ? <Waiting /> : null}
      {addReview ? (
        <AddReview
          handleClose={() => setAddReview(false)}
          handleAdded={(data: CustomReview) => {
            setReviews(pre => [
              ...pre,
              {
                ...data,
              },
            ]);
            setAddReview(false);
          }}
          setLoading={value => setLoading(value)}
          postId={postId}
        />
      ) : null}
      <View style={styles.header}>
        <Icon
          onPress={() => (navigation as Navigation).goBack()}
          name="arrow-back-ios"
          size={23}
          color={'##1a1818'}
        />

        <Ionicons
          onPress={() => setAddReview(true)}
          name="create-outline"
          size={23}
          color={'##1a1818'}
        />
      </View>
      <View>
        {reviews.map(review => (
          <View style={styles.itemWrapperStyle} key={review.id}>
            <Avatar
              style={styles.itemImageStyle}
              source={_.get(avatars, review.user?.avatar!)}
            />
            <View style={styles.contentWrapperStyle}>
              <Text style={styles.txtNameStyle}>{review.user?.name}</Text>
              <HStack>
                {[1, 2, 3, 4, 5].map(star => (
                  <Icon
                    name="star"
                    color={star <= review.rating ? 'orange' : 'lightgrey'}
                  />
                ))}
              </HStack>
              <Text style={styles.txtEmailStyle}>{review.comment}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
export default LocationReview;
