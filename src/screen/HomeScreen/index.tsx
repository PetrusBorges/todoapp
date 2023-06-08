import useAuth from '../../hooks/useAuth';

import { Text } from '../../components/Text';
import { Container } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <Container>
      <Text color='#FFF' >{user.email}</Text>
      <TouchableOpacity onPress={logout}>
        <Text color='#FFF' >sair</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default HomeScreen;
