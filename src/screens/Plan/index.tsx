import { Avatar, Button, Center, Text } from 'native-base';
import React from 'react';

import { avatars } from '../../lib/assets';
import styles from './styles';

function Plan() {
  return (
    <Center style={styles.container}>
      <Avatar source={avatars.avatar1} />
      <Text>Plan screen</Text>
      <Button>Press me</Button>
    </Center>
  );
}

export default Plan;
