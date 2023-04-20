import React, { useEffect } from 'react';
import { Avatar, Button, Center, Text } from 'native-base';

import styles from './styles';
import { assets } from '../../lib/assets';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/reducers/user';

function Settings() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        dispatch(
          actions.signIn({ email: currentUser.email!, uid: currentUser.uid }),
        );
      }
    });
  }, [dispatch]);
  return (
    <Center style={styles.container}>
      <Avatar source={assets.avatar} />
      <Text>Settins screen</Text>
      <Button onPress={() => auth().signOut()}>Log out</Button>
    </Center>
  );
}

export default Settings;
