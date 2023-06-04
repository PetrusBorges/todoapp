import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboadingScreen from '../screen/OnboadingScreen';
import SecondScreen from '../screen/SecondScreen/SecondScreen copy';

const Stack = createStackNavigator();

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
          name='SecondScreen'
          component={SecondScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
