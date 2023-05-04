/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '../lib/icons';
import Home from './Home';
import Settings from './Settings';
import Account from './Account';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/reducers/user';
import auth from '@react-native-firebase/auth';
import AuthorizedScreen from '../../AuthorizedScreen';
import { Detail } from '../components';

const Tab = createBottomTabNavigator();

function Workspace() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        dispatch(
          actions.signIn({ email: currentUser.email!, uid: currentUser.uid }),
        );
      }
    });
  }, [dispatch]);
  return (
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
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="grid" color={color} size={size} />
            ),
          }}>
          {() => (
            <Detail
              image="https://asiasociety.org/files/uploads/265images/131106_POD_the_philippines(1).jpg"
              name="Siargao island"
              location="Philipines"
              rating={5.0}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit."
            />
          )}
        </Tab.Screen>
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
              <Account navigation={navigation} />
            </AuthorizedScreen>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Workspace;
