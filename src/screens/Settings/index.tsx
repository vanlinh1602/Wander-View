import { Button, Center, Heading, Text, VStack } from 'native-base';
import React from 'react';

import { Feather } from '../../lib/icons';

type Props = {
  navigation: any;
};

import { useSelector } from 'react-redux';

import { selectUserAdmin } from '../../redux/selectors/user';
import styles from './styles';
const Settings = ({ navigation }: Props) => {
  const isAdmin = useSelector(selectUserAdmin);
  return (
    <Center style={styles.container}>
      <Heading mb="16">Settings</Heading>
      <VStack space={4}>
        {isAdmin ? (
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
        ) : null}
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
          onPress={() => (navigation as Navigation).navigate('aboutUs')}>
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
          onPress={() => (navigation as Navigation).navigate('contact')}>
          <Text color="white" width="64">
            Contact
          </Text>
        </Button>
      </VStack>
    </Center>
  );
};

export default Settings;
