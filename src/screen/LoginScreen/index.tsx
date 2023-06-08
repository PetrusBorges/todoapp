import { useState, useMemo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../main/Main';

import useAuth from '../../hooks/useAuth';

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

type LoginScreenProps = StackNavigationProp<RootStackParamList>

const LoginScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loginFail, setLoginFail] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigation = useNavigation<LoginScreenProps>();

  const { signIn } = useAuth();

  const isInputsEmpty = useMemo(() => {
    return email.length === 0 || password.length <= 7;
  }, [email, password]);

  const handleLogin = useCallback(async () => {
    try {
      setIsLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const credentials = {
        email,
        password
      };

      await signIn(credentials);
    } catch (error) {
      console.log(error);
      setLoginFail(true);
    } finally {
      setIsLoading(false);
      setEmail('');
      setPassword('');

      setTimeout(() => {
        setLoginFail(false);
      }, 3000);
    }
  }, [email, password]);

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
            value={email}
            onChangeText={(value) => setEmail(value)}
            placeholder="Enter your username"
            placeholderTextColor='#979797'
          />
        </Credentials>

        <Credentials>
          <Text color='#FFF'>Password</Text>
          <Input
            value={password}
            onChangeText={(value) => setPassword(value)}
            placeholder="Enter your password"
            placeholderTextColor='#979797'
            secureTextEntry
            maxLength={8}
          />
        </Credentials>
        {loginFail && (
          <Text color='#fc1616'>
          Email or password invalid!
          </Text>
        )}
      </CredentialsContainer>


      <Button
        disabled={isLoading || isInputsEmpty}
        isLoading={isLoading}
        onPress={handleLogin}
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
