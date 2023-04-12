/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import store from './src/redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Settings } from './src/screens';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveTintColor: '#5A4CBB',
              tabBarStyle: { backgroundColor: '#FCFBFE', borderTopWidth: 0 },
            }}>
            <Tab.Screen
              name="home"
              component={Home}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name="home" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="location"
              component={Settings}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <SimpleLineIcons name="grid" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Like"
              component={Settings}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <SimpleLineIcons name="heart" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Bag"
              component={Settings}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name="cloudo" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
