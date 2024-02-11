import axios from 'axios';
import { EXPO_HOST, EXPO_LOCAL_HOST, NODE_ENV } from '@env';

export const api = axios.create({ baseURL: NODE_ENV !== 'production' ? `${EXPO_LOCAL_HOST}` : `${EXPO_HOST}`  })