import useAuth from '../../hooks/useAuth';

import { Text } from '../../components/Text';
import { Footer } from '../../components/Footer';
import {
  Container,
  Header,
  IconView,
  SearchContainer,
  Image,
  Input,
  TasksContainer,
  ButtonTaskHeader
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
          weight='700'
        >
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

      <SearchContainer>
        <Image
          source={require('../../assets/icons/searchIcon.png')}
        />
        <Input
          placeholder="Search for your task..."
          placeholderTextColor='#979797'
        />
      </SearchContainer>

      <TasksContainer>
        <ButtonTaskHeader>
          <Text
            color="#FFFFFF"
            size={14}
            weight='400'
          >
            Today
          </Text>
          <Image
            source={require('../../assets/icons/arrowDownIcon.png')}
          />
        </ButtonTaskHeader>

        <ButtonTaskHeader>
          <Text
            color="#FFFFFF"
            size={14}
            weight='400'
          >
            Completed
          </Text>
          <Image
            source={require('../../assets/icons/arrowDownIcon.png')}
          />
        </ButtonTaskHeader>
      </TasksContainer>

      <Footer />
    </Container>
  );
};

export default HomeScreen;
