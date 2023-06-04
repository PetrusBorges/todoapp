import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { Container, OnboadingContainer, Image, InfoOnboading } from './styles';

const OnboadingScreen = () => {
  return (
    <Container>
      <OnboadingContainer>
        <Image
          source={require('../../assets/images/Onboading1.png')}
        />

        <InfoOnboading>
          <Text
            weight='700'
            color='#FFF'
            size={32}
          >
          Manage your tasks
          </Text>
          <Text
            color='#FFF'
            style={{ textAlign: 'center'}}
          >
            You can easily manage all of your daily tasks in DoMe for free
          </Text>
        </InfoOnboading>
      </OnboadingContainer>
      <Button onPress={() => alert('oi')}>
        <Text color='#FFF'>Botao</Text>
      </Button>
    </Container>
  );
};

export default OnboadingScreen;
