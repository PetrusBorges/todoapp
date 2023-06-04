import { Text, TouchableOpacity } from 'react-native';
import * as S from './styles';

interface SecondScreenProps {
  navigation: {
    goBack: () => void;
  }
}

const SecondScreen = ({
  navigation
}: SecondScreenProps) => {
  return (
    <S.Container>
      <Text>SecondScreen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>voltar</Text>
      </TouchableOpacity>
    </S.Container>
  );
};

export default SecondScreen;
