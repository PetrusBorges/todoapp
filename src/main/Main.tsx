import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from '../contexts/userAuth';

import Routes from '../routes';

export type RootStackParamList = {
  OnboadingScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  HomeScreen: undefined;
  ResetPassword: undefined;
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
