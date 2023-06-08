import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from '../main/Main';

import HomeScreen from '../screen/HomeScreen';
import ResetPasswordScreen from '../screen/ResetPasswordScreen';

const Stack = createStackNavigator<RootStackParamList>();

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
      />
      <Stack.Screen
        name='ResetPasswordScreen'
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;
