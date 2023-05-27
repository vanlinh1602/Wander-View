import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Tabs from '../navigation/tab';
import { actions as locationActions } from '../redux/reducers/location';
import { actions as userActions } from '../redux/reducers/user';

function Workspace() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        dispatch(
          userActions.signIn({
            email: currentUser.email!,
            uid: currentUser.uid,
          }),
        );
      }
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch(locationActions.getLocations());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default Workspace;
