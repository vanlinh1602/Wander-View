import type { PayloadAction } from '@reduxjs/toolkit';

export type UserInfo = {
  uid?: string;
  email?: string;
  name?: string;
  bithday?: number;
  phone?: string;
  avatar?: string;
};

export type UserState = {
  info?: UserInfo;
  loading: boolean;
};

export type SignInAction = PayloadAction<
  { email: string; uid: string } | undefined
>;
