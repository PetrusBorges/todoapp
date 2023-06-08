import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from '../main/Main';

import OnboadingScreen from '../screen/OnboadingScreen';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';

const Stack = createStackNavigator<RootStackParamList>();

const UnauthenticatedStack = () => {
  return (
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
  );
};

export default UnauthenticatedStack;
