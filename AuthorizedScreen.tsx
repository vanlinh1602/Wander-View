import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './src/redux/selectors/user';
import Login from './src/screens/Login';
type Props = {
  children: JSX.Element;
  navigation?: any;
};

const AuthorizedScreen = ({ children, navigation }: Props) => {
  const user = useSelector(selectUser);

  if (!user?.uid) {
    return <Login navigation={navigation} />;
  }
  return children;
};

export default AuthorizedScreen;
