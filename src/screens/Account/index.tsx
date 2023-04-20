import React from 'react';
import { Avatar, Button, Center, Text } from 'native-base';

import styles from './styles';
import { assets } from '../../lib/assets';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/reducers/user';
import { selectUser } from '../../redux/selectors/users';

function Account() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <Center style={styles.container}>
      <Avatar source={assets.avatar} />
      <Text>Profile screen</Text>
      <Text>{user?.name}</Text>

      <Text>{user?.email}</Text>

      <Button
        onPress={async () => {
          await auth()
            .signOut()
            .then(() => {
              dispatch(actions.fetchUser({}));
            });
        }}>
        Log out
      </Button>
    </Center>
  );
}

export default Account;
