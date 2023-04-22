import React, { useState } from 'react';
import { Avatar, Button, HStack, Modal, Pressable, View } from 'native-base';
import { avatars } from '../../lib/assets';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/reducers/user';
import _ from 'lodash';
import { MaterialIcons } from '../../lib/icons';

type Props = {
  userUid: string;
  avatarUser?: string;
  onCancel: () => void;
};

const SelectAvatar = ({ onCancel, avatarUser, userUid }: Props) => {
  const dispatch = useDispatch();
  const [imgSelected, setImgSelected] = useState<string>(avatarUser || '');
  const onConfirm = () => {
    dispatch(actions.updateUser({ uid: userUid, avatar: imgSelected }));
    onCancel();
  };
  return (
    <Modal isOpen size="xl" onClose={onCancel}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header alignItems="center">CHỌN AVATAR</Modal.Header>
        <Modal.Body>
          <View width="full">
            {_.chunk(Object.entries(avatars), 3).map((subAvatar, index) => (
              <HStack key={index} space="4" mb="1" mt="1">
                {subAvatar.map(([id, avatar]) => (
                  <Pressable key={id} onPress={() => setImgSelected(id)}>
                    <Avatar source={avatar} size="xl">
                      {imgSelected === id ? (
                        <Avatar.Badge
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          children={
                            <MaterialIcons
                              color="white"
                              name="check"
                              size={16}
                            />
                          }
                        />
                      ) : null}
                    </Avatar>
                  </Pressable>
                ))}
              </HStack>
            ))}
          </View>
        </Modal.Body>
        <Modal.Footer justifyContent="center">
          <Button.Group space={2}>
            <Button bg="#5646b7" onPress={onConfirm}>
              Xác nhận
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default SelectAvatar;
