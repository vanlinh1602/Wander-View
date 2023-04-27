import { Avatar, Button, Center, Text } from 'native-base';
import React from 'react';

import { avatars } from '../../lib/assets';
import styles from './styles';

function Settings() {
  return (
    <Center style={styles.container}>
      <Avatar source={avatars.avatar1} />
      <Text>Settins screen</Text>
      <Button>Press me</Button>
    </Center>
  );
}

export default Settings;
