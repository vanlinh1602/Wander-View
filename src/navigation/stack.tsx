import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { LocaitonDetail } from '../components';
import LocationReview from '../features/LocationReview';
import Tabs from './tab';

const Stack = createStackNavigator();

const StackNavigate = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={Tabs} />
      <Stack.Screen name="locationDetail" component={LocaitonDetail} />
      <Stack.Screen name="locationReview" component={LocationReview} />
    </Stack.Navigator>
  );
};

export default StackNavigate;
