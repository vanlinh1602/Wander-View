import type { FirebaseAuthTypes } from '@react-native-firebase/auth';
import type { PayloadAction } from '@reduxjs/toolkit';

export type UserInfo = {
  email?: string;
  name?: string;
};

export type Users = {
  user?: UserInfo;
  loading: boolean;
};

export type FetchUsersAction = PayloadAction<
  { user: FirebaseAuthTypes.User } | undefined
>;
