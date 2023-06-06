import notifee from '@notifee/react-native';
import { Button, Center } from 'native-base';
import React from 'react';

import { CHANNEL_NOTIFY } from '../../lib/config';

const AboutUs = () => {
  async function onDisplayNotification() {
    await notifee.displayNotification({
      title: 'Wander View',
      body: 'Dcmm',
      android: {
        channelId: CHANNEL_NOTIFY,
        pressAction: {
          id: 'default',
        },
      },
    });
  }
  return (
    <Center>
      <Button onPress={() => onDisplayNotification()}>Click Me</Button>
    </Center>
  );
};

export default AboutUs;
