import { Avatar, HStack, Pressable, Text, View } from 'native-base';
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
    <View>
      {userSave?.map(postId => {
        const location = locations.find(value => value.id === postId);
        return (
          <Pressable
            onPress={() =>
              (navigation as Navigation).navigate('locationDetail', location)
            }>
            <HStack alignItems="center" space={5} mb={5}>
              <Avatar source={{ uri: location?.imgUrl }} />
              <Text>{location?.title}</Text>
            </HStack>
          </Pressable>
        );
      })}
    </View>
  );
};

export default Saved;
