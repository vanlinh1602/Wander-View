import React from 'react';
import { Avatar, Center, Text } from 'native-base';

import styles from './styles';
import { TemplateButton } from '../../components';
import { assets } from '../../libs/assets';

function Settings() {
  return (
    <Center style={styles.container}>
      <Avatar source={assets.avatar} />
      <Text>Settins screen</Text>
      <TemplateButton content="This is Button" />
    </Center>
  );
}

export default Settings;
