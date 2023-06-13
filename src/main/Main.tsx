import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from '../contexts/userAuth';

import Routes from '../routes';

import { Task } from '../@types/Task';

export type RootStackParamList = {
  OnboadingScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  HomeScreen: undefined;
  ResetPasswordScreen: undefined;
  ProfileScreen: { tasks?: Task[] };
}

const Main = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default Main;
