import type { ApiProblems } from './api';

declare global {
  type CustomObject<Type> = {
    [key: string]: Type;
  };
  type WithApiResult<T> = { kind: 'ok'; data: T } | ApiProblems;

  type Navigation = {
    push: (screen: string) => void;
    goBack: () => void;
    navigate: (screen: string, params?: any) => void;
  };

  type Route = {
    params: any;
  };
}

export {};
