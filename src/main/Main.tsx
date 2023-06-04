import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InitialScreen from '../screen/InitialScreen/InitialScreen';
import SecondScreen from '../screen/SecondScreen/SecondScreen copy';

const Stack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='InitialScreen'
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name='InitialScreen'
          component={InitialScreen}
        />
        <Stack.Screen
          name='SecondScreen'
          component={SecondScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
