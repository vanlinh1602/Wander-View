import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { LocaitonDetail } from '../components';
import LocationReview from '../features/LocationReview';
import NewPostScreen from '../features/NewPostScreen';
import Login from '../screens/Login';
import AboutUs from '../screens/Settings/AboutUs';
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
      <Stack.Screen name="newPost" component={NewPostScreen} />
      <Stack.Screen name="auth" component={Login} />
      <Stack.Screen name="aboutUs" component={AboutUs} />
    </Stack.Navigator>
  );
};

export default StackNavigate;
