import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboadingScreen from '../screen/OnboadingScreen';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';

export type RootStackParamList = {
  OnboadingScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='OnboadingScreen'
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name='OnboadingScreen'
          component={OnboadingScreen}
        />
        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
        />
        <Stack.Screen
          name='RegisterScreen'
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
