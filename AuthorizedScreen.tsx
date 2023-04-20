import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './src/redux/selectors/users';
import { Login } from './src/screens';
type Props = {
  children: JSX.Element;
  navigation?: any;
};

const AuthorizedScreen = ({ children, navigation }: Props) => {
  const user = useSelector(selectUser);

  if (!user?.name) {
    return <Login navigation={navigation ?? null} />;
  }
  return children;
};

export default AuthorizedScreen;