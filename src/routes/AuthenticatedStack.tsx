import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from '../main/Main';

import HomeScreen from '../screen/HomeScreen';
import ResetPassword from '../screen/ResetPassword';

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
        name='ResetPassword'
        component={ResetPassword}
      />
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;
