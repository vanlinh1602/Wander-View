import { Button, Center, Heading, Text, VStack } from 'native-base';
import React from 'react';

import { Feather } from '../../lib/icons';

type Props = {
  navigation: any;
};

import styles from './styles';
const Settings = ({ navigation }: Props) => {
  return (
    <Center style={styles.container}>
      <Heading mb="16">Settings</Heading>
      <VStack space={4}>
        <Button
          width="80"
          rightIcon={<Feather name="arrow-right" size={25} color="white" />}
          style={{
            backgroundColor: '#5A4CBB',
            borderRadius: 24,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
          onPress={() => (navigation as Navigation).navigate('newPost')}>
          <Text color="white" width="64">
            Post Screen
          </Text>
        </Button>
        <Button
          width="80"
          rightIcon={<Feather name="arrow-right" size={25} color="white" />}
          style={{
            backgroundColor: '#5A4CBB',
            borderRadius: 24,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
          onPress={() => console.log('Pressed')}>
          <Text color="white" width="64">
            About Us
          </Text>
        </Button>
        <Button
          width="80"
          rightIcon={<Feather name="arrow-right" size={25} color="white" />}
          style={{
            backgroundColor: '#5A4CBB',
            borderRadius: 24,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
          onPress={() => console.log('Pressed')}>
          <Text color="white" width="64">
            Contact
          </Text>
        </Button>
      </VStack>
    </Center>
  );
};

export default Settings;
