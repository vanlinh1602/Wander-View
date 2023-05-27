/* eslint-disable react/no-unstable-nested-components */
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { View } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import AuthorizedScreen from '../../AuthorizedScreen';
import { AntDesign } from '../lib/icons';
import Account from '../screens/Account';
import Home from '../screens/Home';
import Location from '../screens/Location';
import Plan from '../screens/Plan';
import Settings from '../screens/Settings';
import { defautTabStyles, TabStyles } from './styles';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }: BottomTabBarButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        top: -20,
        justifyContent: 'center',
        alignItems: 'center',
        ...TabStyles.shadow,
      }}
      onPress={onPress}>
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: '#5B4DBC',
          borderRadius: 35,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#5A4CBB',
        tabBarStyle: {
          ...defautTabStyles.tabBarStyle,
        },
      }}>
      <Tab.Screen
        name="location"
        component={Location}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="appstore-o" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="plan"
        component={Plan}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="form" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ size }) => (
            <AntDesign name="home" color="#fff" size={size} />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="account"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}>
        {({ navigation }) => (
          <AuthorizedScreen navigation={navigation}>
            <Account navigation={navigation} />
          </AuthorizedScreen>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="setting"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
