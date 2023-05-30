import type { PayloadAction } from '@reduxjs/toolkit';

export type Plan = {
  name: string;
  start: number;
  end: number;
  description?: string;
};

export type UserInfo = {
  uid?: string;
  email?: string;
  name?: string;
  bithday?: number;
  phone?: string;
  avatar?: string;
  plans?: Plan[];
  save?: string[];
};

export type UserState = {
  info?: UserInfo;
  loading: boolean;
};

export type SignInAction = PayloadAction<
  { email: string; uid: string } | undefined
>;
