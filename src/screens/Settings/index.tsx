import { Avatar, Button, Center, Text } from 'native-base';
import React from 'react';

import { avatars } from '../../lib/assets';
import { FontFamily } from '../../lib/options';
import styles from './styles';

function Settings() {
  return (
    <Center style={styles.container}>
      <Avatar source={avatars.avatar1} />
      <Text fontFamily={FontFamily.regular}>Settins screen</Text>
      <Button>Press me</Button>
    </Center>
  );
}

export default Settings;
