import _ from 'lodash';
import { Button, FormControl, HStack, Input, Modal } from 'native-base';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { AntDesign } from '../../lib/icons';
import { actions } from '../../redux/reducers/location';
import { selectUser } from '../../redux/selectors/user';
import { backendService } from '../../services';

type Props = {
  handleClose: () => void;
  setLoading: (value: boolean) => void;
  handleAdded: (data: any) => void;
  postId: string;
};

export type Review = {
  rating: number;
  comment: string;
  user?: {
    avatar: string;
    name: string;
    id: string;
  };
};

const AddReview = ({ handleClose, postId, setLoading, handleAdded }: Props) => {
  const user = useSelector(selectUser);
  const [userReview, setUserReview] = useState<Review>({
    rating: 5,
    comment: '',
  });
  const dispatch = useDispatch();

  const validate = () => {
    if (userReview.comment && userReview.comment.length > 1200) {
      Alert.alert('Comment', 'Characters should not exceed 1200');
      return false;
    }
    return true;
  };

  const handleAddReview = async () => {
    if (!validate()) return;
    setLoading(true);
    const dataUpload = _.cloneDeep(userReview);
    dataUpload.user = {
      name: user?.name ?? '',
      id: user?.uid ?? '',
      avatar: user?.avatar ?? 'avatar1',
    };
    const result = await backendService.post<{
      cmtId: string;
      postRating: string;
    }>('api/addReview', {
      data: dataUpload,
      postId,
    });

    if (result.kind === 'ok') {
      setLoading(false);
      dispatch(
        actions.fetchLocationRate({ rating: result.data.postRating, postId }),
      );
      handleAdded({
        id: result.data.cmtId,
        ...dataUpload,
      });
    }
  };

  return (
    <Modal isOpen>
      <Modal.Content>
        <Modal.Header>Add new review</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Rating</FormControl.Label>
            <HStack>
              {[1, 2, 3, 4, 5].map(star => (
                <AntDesign
                  key={star}
                  onPress={() =>
                    setUserReview(pre => ({
                      ...pre,
                      rating: star,
                    }))
                  }
                  name="star"
                  size={26}
                  color={star <= userReview.rating ? 'orange' : 'lightgrey'}
                />
              ))}
            </HStack>
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Comment</FormControl.Label>
            <Input
              onChangeText={value =>
                setUserReview(pre => ({
                  ...pre,
                  comment: value,
                }))
              }
            />
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={handleClose}>
              Cancel
            </Button>
            <Button onPress={handleAddReview}>Save</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default AddReview;
