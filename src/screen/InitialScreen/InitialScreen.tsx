import { Text, TouchableOpacity } from 'react-native';
import * as S from './styles';

interface InitialScreenProps {
  navigation: {
    navigate: (routeName: string) => void,
  }
}

const InitialScreen = ({
  navigation
}: InitialScreenProps) => {
  return (
    <S.Container>
      <Text>InitialScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SecondScreen')}>
        <Text>Go to Second Screen</Text>
      </TouchableOpacity>
    </S.Container>
  );
};

export default InitialScreen;
