import { StyleSheet } from 'react-native';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import {
  Container,
  OnboadingContainer,
  Image,
  InfoOnboading,
  AccountContainer,
  AccountItem
} from './styles';

import Swiper from 'react-native-swiper';

const OnboadingScreen = () => {
  return (
    <Container>
      <Swiper
        loop={false}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      >
        <OnboadingContainer>
          <Image
            style={{ width: 280, height: 280}}
            resizeMode='contain'
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
              You can easily manage all of your daily tasks in todo for free
            </Text>
          </InfoOnboading>
        </OnboadingContainer>

        <OnboadingContainer>
          <Image
            style={{ width: 280, height: 280}}
            resizeMode='contain'
            source={require('../../assets/images/Onboading2.png')}
          />

          <InfoOnboading>
            <Text
              weight='700'
              color='#FFF'
              size={32}
            >
              Create daily routine
            </Text>
            <Text
              color='#FFF'
              style={{ textAlign: 'center'}}
            >
              In todo  you can create your personalized routine to stay productive
            </Text>
          </InfoOnboading>
        </OnboadingContainer>

        <OnboadingContainer>
          <Image
            style={{ width: 280, height: 280}}
            resizeMode='contain'
            source={require('../../assets/images/Onboading3.png')}
          />

          <InfoOnboading>
            <Text
              weight='700'
              color='#FFF'
              size={32}
            >
              Orgonaize your tasks
            </Text>
            <Text
              color='#FFF'
              style={{ textAlign: 'center'}}
            >
              You can organize your daily tasks by adding your tasks into separate categories
            </Text>
          </InfoOnboading>
        </OnboadingContainer>
      </Swiper>

      <AccountContainer>
        <AccountItem>
          <Button
            isOutlined
            onPress={() => alert('register')}
          >
            <Text color='#FFF'>CREATE ACCOUNT</Text>
          </Button>
        </AccountItem>

        <AccountItem>
          <Button onPress={() => alert('login')}>
            <Text color='#FFF'>LOGIN</Text>
          </Button>
        </AccountItem>
      </AccountContainer>
    </Container>
  );
};

const styles= StyleSheet.create({
  dotStyle: {
    width: 26,
    height: 4,
    borderRadius: 56,
    backgroundColor: '#AFAFAF',
    opacity: 0.5
  },
  activeDotStyle: {
    width: 26,
    height: 4,
    borderRadius: 56,
    backgroundColor: '#FFFFFF'
  }
});

export default OnboadingScreen;
