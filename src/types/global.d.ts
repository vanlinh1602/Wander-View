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
    reset: (props: { index: number; routes: { name: string }[] }) => void;
    replace: (name: string, params: { screen: string }) => void;
  };

  type Route = {
    params: any;
  };
}

export {};
