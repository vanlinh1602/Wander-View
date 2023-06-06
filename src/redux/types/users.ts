import type { PayloadAction } from '@reduxjs/toolkit';

import type { Notify } from '../../types/utils';

export type Plan = {
  name: string;
  start: number;
  end: number;
  locationId: string;
  description?: string;
};

export type UserInfo = {
  uid?: string;
  email?: string;
  name?: string;
  bithday?: number;
  phone?: string;
  avatar?: string;
  plans?: CustomObject<Plan>;
  save?: string[];
  notification?: CustomObject<Notify>;
};

export type UserState = {
  info?: UserInfo;
  admin: boolean;
  loading: boolean;
};

export type SignInAction = PayloadAction<
  { email: string; uid: string } | undefined
>;
