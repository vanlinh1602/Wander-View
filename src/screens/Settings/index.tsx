import React from 'react';
import { Avatar, Button, Center, Text } from 'native-base';

import styles from './styles';
import { avatars } from '../../lib/assets';

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
