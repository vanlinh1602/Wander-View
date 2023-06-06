import { Avatar, HStack, Pressable, Text, VStack } from 'native-base';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectLocations } from '../../../redux/selectors/loaction';
import { selectUserSaves } from '../../../redux/selectors/user';

type Props = {
  navigation: any;
};

const Saved = ({ navigation }: Props) => {
  const userSave = useSelector(selectUserSaves);
  const locations = useSelector(selectLocations);
  return (
    <VStack space={2}>
      {userSave?.map(postId => {
        const location = locations.find(value => value.id === postId);
        return (
          <Pressable
            width="80"
            key={postId}
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 24,
              borderColor: '#5A4CBB',
            }}
            onPress={() =>
              (navigation as Navigation).navigate('locationDetail', location)
            }>
            <HStack alignItems="center" space={5}>
              <Avatar source={{ uri: location?.imgUrl }} />
              <Text>{location?.title}</Text>
            </HStack>
          </Pressable>
        );
      })}
    </VStack>
  );
};

export default Saved;
