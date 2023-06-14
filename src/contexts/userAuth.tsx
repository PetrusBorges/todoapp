import { FC, createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosResponse } from 'axios';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../main/Main';

import { api, applyToken } from '../services/api';

import { User } from '../@types/User';

interface AuthProviderProps {
  children: React.ReactNode
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface UpdatePasswordCredentials {
  password: string;
  confirmPassword: string;
}

interface RecoveryPasswordCredentials {
  email: string;
}

type NavigationAuthProps = StackNavigationProp<RootStackParamList>

interface AuthContextData {
  signIn: (credentials: SignInCredentials) => Promise<boolean>;
  logout(): void;
  updatePassword: (credentials: UpdatePasswordCredentials) => Promise<boolean>;
  recoveryPassword: (credentials: RecoveryPasswordCredentials) => Promise<boolean>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  getToken(): void;
  isAuthenticated: boolean;
  loading: boolean;
  getUserFromToken: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider: FC<AuthProviderProps> = ({
  children
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const navigation = useNavigation<NavigationAuthProps>();

  const userStorage = '@lq_user_token';

  useEffect(() => {
    const loadStorageData = async () => {
      const storageToken = await AsyncStorage.getItem(userStorage);

      if (storageToken) {
        await applyToken();
        await getUserFromToken();
      }
    };

    loadStorageData();
  }, []);

  useEffect(() => {
    if (user) {
      setIsAuthenticated(true);
      setLoading(false);
    } else {
      setIsAuthenticated(false);
      setLoading(false);
    }
  }, [user]);

  const getUserFromToken = async (): Promise<User | undefined> => {
    try {
      setLoading(true);

      const response: AxiosResponse<User> = await api.get('/login/me');
      const user = response.data;

      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setLoading(false);
      }

      return user;
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async (data: SignInCredentials) => {
    const response = await api.post('/login', data);
    setToken(response.data.token);
    setUser(response.data.user);
    await applyToken();

    if (response.data.isFirstLogin === false) {
      navigation.navigate('HomeScreen');
    } else {
      await getUserFromToken();
    }
    return true;
  };

  const updatePassword = async (data: UpdatePasswordCredentials) => {
    try {
      const response = await api.post('/update_password', data);

      if (response) {
        setToken(response.data.token);
        await applyToken();
        await getUserFromToken();
      }

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const recoveryPassword = async (data: RecoveryPasswordCredentials) => {
    try {
      const response = await api.post('/recovery_password', data);

      if (!response) {
        return false;
      }

      if (response) {
        navigation.navigate('ResetPasswordScreen');
        setToken(response.data.token);
        await applyToken();
      }

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const getToken = async () => {
    try {
      return await AsyncStorage.getItem(userStorage);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const setToken = async (token: string) => {
    try {
      await AsyncStorage.setItem(userStorage, token);
      return token;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem(userStorage);
      setIsAuthenticated(false);
      setUser(null);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await api.post('logout');
      removeToken();
    } catch (error) {
      console.log(error);
      removeToken();
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        logout,
        updatePassword,
        recoveryPassword,
        getToken,
        getUserFromToken,
        user,
        setUser,
        loading,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
