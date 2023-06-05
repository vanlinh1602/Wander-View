import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NavigationRoute from '../navigation';
import { actions as locationActions } from '../redux/reducers/location';
import { actions as userActions } from '../redux/reducers/user';
import { selectUser } from '../redux/selectors/user';
import { backendService } from '../services';

function Workspace() {
  const user = useSelector(selectUser);
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
    if (user?.uid) {
      backendService
        .post<{ admin: boolean }>('api/checkAdmin', { email: user.email })
        .then(result => {
          if (result.kind === 'ok') {
            dispatch(userActions.fetchAdmin(result.data.admin));
          }
        });
    }
  }, [user, dispatch]);

  useEffect(() => {
    dispatch(locationActions.getLocations());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <NavigationRoute />
    </NavigationContainer>
  );
}

export default Workspace;
