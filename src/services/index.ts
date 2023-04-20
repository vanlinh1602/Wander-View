import { BACKEND_URL } from '../lib/configs';
import Api from './api';

export const backendService = new Api({
  baseURL: BACKEND_URL,
});
