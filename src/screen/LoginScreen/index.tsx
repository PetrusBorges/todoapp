import { FC } from 'react';

import { Text } from '../../components/Text';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { TouchableOpacity } from 'react-native';
import {
  Container,
  Image,
  BackButton,
  CredentialsContainer,
  Credentials,
  OrContainer,
  OrDiv,
  SocialButton,
  RegisterLink
} from './styles';

interface LoginScreenProps {
  navigation: {
    goBack: () => void;
    navigate: (screenName: string) => void;
  }
}

const LoginScreen: FC<LoginScreenProps> = ({
  navigation
}) => {
  return (
    <Container>
      <BackButton
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require('../../assets/icons/backButtonIcon.png')}
        />
      </BackButton>

      <Text
        color='#FFF'
        weight='700'
        size={32}
        style={{ marginTop: 20, marginBottom: 70}}
      >
        Login
      </Text>

      <CredentialsContainer>
        <Credentials>
          <Text color='#FFF'>Username</Text>
          <Input
            placeholder="Enter your username"
            placeholderTextColor='#979797'
          />
        </Credentials>

        <Credentials>
          <Text color='#FFF'>Password</Text>
          <Input
            placeholder="Enter your password"
            placeholderTextColor='#979797'
            secureTextEntry
          />
        </Credentials>
      </CredentialsContainer>

      <Button
        onPress={() => alert('oi')}
      >
        <Text color='#FFF'>
          Login
        </Text>
      </Button>

      <OrContainer>
        <OrDiv />
        <Text color='#979797'>OR</Text>
        <OrDiv />
      </OrContainer>

      <SocialButton>
        <Image
          source={require('../../assets/icons/googleIcon.png')}
        />
        <Text color='#FFF'>
          Login with Google
        </Text>
      </SocialButton>

      <RegisterLink>
        <Text color='#FFF' opacity={0.2}>Don’t have an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterScreen')}
        >
          <Text color='#FFF'>Register</Text>
        </TouchableOpacity>
      </RegisterLink>
    </Container>
  );
};

export default LoginScreen;
