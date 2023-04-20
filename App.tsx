/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import store from './src/redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Account, Home, Settings } from './src/screens';
import { AntDesign, Ionicons, MaterialCommunityIcons } from './src/lib/icons';
import AuthorizedScreen from './AuthorizedScreen';

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
                  <Ionicons name="grid" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Like"
              component={Settings}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="heart" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Account"
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="account-outline"
                    color={color}
                    size={size}
                  />
                ),
              }}>
              {({ navigation }) => (
                <AuthorizedScreen navigation={navigation}>
                  <Account />
                </AuthorizedScreen>
              )}
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
