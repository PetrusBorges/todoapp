import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const URL_DEV = 'http://192.168.0.100:3000';

export const api = axios.create({
  baseURL: URL_DEV,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json'
  }
});

const userStorage = '@lq_user_token';

const getStorageToken = async () => {
  const token = await AsyncStorage.getItem(userStorage);

  if (token) {
    return token;
  }
};

export const applyToken = async (): Promise<void> => {
  const token = await getStorageToken();
  api.defaults.headers.Authorization = `${token}`;
};
