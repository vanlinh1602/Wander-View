import React from 'react';
import { Avatar, Button, Center, Text } from 'native-base';

import styles from './styles';
import { assets } from '../../lib/assets';
import auth from '@react-native-firebase/auth';

function Settings() {
  return (
    <Center style={styles.container}>
      <Avatar source={assets.avatar} />
      <Text>Settins screen</Text>
      <Button onPress={() => auth().signOut()}>Log out</Button>
    </Center>
  );
}

export default Settings;
