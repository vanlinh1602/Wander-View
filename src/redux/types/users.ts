import type { PayloadAction } from '@reduxjs/toolkit';

export type UserInfo = {
  email?: string;
  name?: string;
};

export type User = {
  info?: UserInfo;
  loading: boolean;
};

export type SignInAction = PayloadAction<
  { email: string; uid: string } | undefined
>;
