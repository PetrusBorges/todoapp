import useAuth from '../../hooks/useAuth';

import { Text } from '../../components/Text';
import { Footer } from '../../components/Footer';
import {
  Container,
  Header,
  IconView
} from './styles';

const HomeScreen = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <Container>
      <Header>
        <Text
          color="#FFFFFF"
          size={28}
          weight='700'>
          Home
        </Text>

        <IconView>
          <Text
            color='#FFFFFF'
            size={26}
            weight='700'
          >
            {user.email.toUpperCase().charAt(0)}
          </Text>
        </IconView>
      </Header>

      <Footer />
    </Container>
  );
};

export default HomeScreen;
