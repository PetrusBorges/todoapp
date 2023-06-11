import { useMemo, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../main/Main';

import { api } from '../../services/api';

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

type RegisterScreenProps = StackNavigationProp<RootStackParamList>

const RegisterScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [registerFail, setRegisterFail] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const navigation = useNavigation<RegisterScreenProps>();

  const isPasswordsEqual = useMemo(() => {
    return password.toLowerCase() === confirmPassword.toLowerCase();
  }, [password, confirmPassword]);

  const isPasswordsEmpty = useMemo(() => {
    return password.length <= 7 && confirmPassword.length <= 7;
  }, [password, confirmPassword]);

  const handleRegister = useCallback(async () => {
    try {
      setIsLoading(true);

      const credentials = {
        email,
        password,
        confirmPassword
      };

      await new Promise((resolve) => setTimeout(resolve, 1000));
      await api.post('/users', credentials);

      navigation.navigate('LoginScreen');
    } catch (error) {
      console.log(error);
      setRegisterFail(true);
    } finally {
      setIsLoading(false);
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      setTimeout(() => {
        setRegisterFail(false);
      }, 3000);
    }
  }, [email, password, confirmPassword, navigation]);

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
        style={{ marginTop: 20, marginBottom: 10}}
      >
        Register
      </Text>

      <CredentialsContainer>
        <Credentials>
          <Text color='#FFF'>Username</Text>
          <Input
            value={email}
            onChangeText={(value: string) => setEmail(value)}
            placeholder="Enter your username"
            placeholderTextColor='#979797'
          />
        </Credentials>

        <Credentials>
          <Text color='#FFF'>Password</Text>
          <Input
            value={password}
            onChangeText={(value: string) => setPassword(value)}
            placeholder="Enter your password"
            placeholderTextColor='#979797'
            secureTextEntry
            maxLength={8}
          />
        </Credentials>

        <Credentials>
          <Text color='#FFF'>Confirm Password</Text>
          <Input
            value={confirmPassword}
            onChangeText={(value: string) => setConfirmPassword(value)}
            placeholder="Confirm your password"
            placeholderTextColor='#979797'
            secureTextEntry
            maxLength={8}
          />
        </Credentials>

        {registerFail && (
          <Text color='#fc1616'>
            Email or password invalid!
          </Text>
        )}

        {!isPasswordsEqual && (
          <Text color='#fc1616'>
            Your passwords do not match!
          </Text>
        )}
      </CredentialsContainer>


      <Button
        disabled={isLoading || !isPasswordsEqual || isPasswordsEmpty}
        isLoading={isLoading}
        onPress={handleRegister}
      >
        <Text color='#FFF'>
          Register
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
        <Text color='#FFF' opacity={0.2}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text color='#FFF'>Login</Text>
        </TouchableOpacity>
      </RegisterLink>
    </Container>
  );
};

export default RegisterScreen;
