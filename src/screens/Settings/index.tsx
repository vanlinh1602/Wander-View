import React from 'react';
import { Avatar, Button, Center, Text, View } from 'native-base';

import styles from './styles';
import { assets } from '../../lib/assets';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors/users';
import { actions as usersAction } from '../../redux/reducers/user';
function Settings() {
  const user = useSelector(selectUser);
  const dispath = useDispatch();
  return (
    <Center style={styles.container}>
      <Avatar source={assets.avatar} />
      <Text>Settins screen</Text>
      <View>
        <Text>{user?.name}</Text>
        <Text>{user?.email}</Text>
      </View>
      <Button onPress={() => dispath(usersAction.fetchUser)}>Fetch User</Button>
    </Center>
  );
}

export default Settings;
