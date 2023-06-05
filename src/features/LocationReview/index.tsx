import _ from 'lodash';
import { Avatar, HStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import { Waiting } from '../../components';
import { avatars } from '../../lib/assets';
import { AntDesign, EvilIcons, Ionicons } from '../../lib/icons';
import { selectUserAdmin, selectUserID } from '../../redux/selectors/user';
import { backendService } from '../../services';
import AddReview, { Review } from './AddReview';
import styles from './styles';

type Props = {
  navigation: any;
  route: any;
};

type CustomReview = Review & { id: string };

const LocationReview = ({ navigation, route }: Props) => {
  const isAdmin = useSelector(selectUserAdmin);
  const { postId } = (route as Route).params;
  const userId = useSelector(selectUserID);
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
          color={'#1a1818'}
        />

        <Ionicons
          onPress={() => {
            if (!userId) {
              Alert.alert('Wander View', 'Please login to use this feature');
              return;
            }
            setAddReview(true);
          }}
          name="create-outline"
          size={23}
          color={'#1a1818'}
        />
      </View>
      <View>
        {reviews.map(review => (
          <View key={review.id}>
            <View style={styles.itemWrapperStyle}>
              <Avatar
                style={styles.itemImageStyle}
                source={_.get(avatars, review.user?.avatar!)}
              />
              <View style={styles.contentWrapperStyle}>
                <Text style={styles.txtNameStyle}>{review.user?.name}</Text>
                <HStack>
                  {[1, 2, 3, 4, 5].map(star => (
                    <AntDesign
                      key={star}
                      name="star"
                      color={star <= review.rating ? 'orange' : 'lightgrey'}
                    />
                  ))}
                </HStack>
                <Text style={styles.txtEmailStyle}>{review.comment}</Text>
              </View>
            </View>
            {isAdmin ? (
              <EvilIcons
                onPress={async () => {
                  setLoading(true);
                  const result = await backendService.post<boolean>(
                    'api/removeReview',
                    { id: review.id, postId },
                  );
                  if (result.kind === 'ok') {
                    setReviews(pre => pre.filter(r => r.id !== review.id));
                  }
                  setLoading(false);
                }}
                style={{
                  position: 'absolute',
                  right: 5,
                  top: 5,
                }}
                name="trash"
                size={30}
                color="red"
              />
            ) : null}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
export default LocationReview;
