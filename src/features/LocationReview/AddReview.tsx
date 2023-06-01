import _ from 'lodash';
import { Button, FormControl, HStack, Input, Modal } from 'native-base';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { AntDesign } from '../../lib/icons';
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

  const handleAddReview = async () => {
    setLoading(true);
    const dataUpload = _.cloneDeep(userReview);
    dataUpload.user = {
      name: user?.name ?? '',
      id: user?.uid ?? '',
      avatar: user?.avatar ?? 'avatar1',
    };
    const result = await backendService.post<string>('api/addReview', {
      data: dataUpload,
      postId,
    });

    if (result.kind === 'ok') {
      setLoading(false);
      handleAdded({
        id: result.data,
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
