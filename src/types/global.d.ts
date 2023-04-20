import type { ApiProblems } from './api';

declare global {
  type CustomObject<Type> = {
    [key: string]: Type;
  };
  type WithId<TSchema> = EnhancedOmit<TSchema, 'id'> & {
    id: string;
  };
  type WithApiResult<T> = { kind: 'ok'; data: T } | ApiProblems;
  type WithOnComplete<T> = T & { onComplete: (error?: string) => void };

  interface Window {
    fcWidget?: any;
  }
}

export {};
