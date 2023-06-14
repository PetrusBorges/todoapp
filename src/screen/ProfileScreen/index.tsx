import { useState, useCallback } from 'react';
import useAuth from '../../hooks/useAuth';
import { api } from '../../services/api';

import { useRoute } from '@react-navigation/native';

import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';
import {
  Container,
  Content,
  HeaderProfile,
  IconView,
  TaskCountCard,
  SettingsContainer,
  AlignSetting,
  SettingsContent,
  SetingsAlign,
  Image,
  ButtonLogout
} from './styles';

import { Task } from '../../@types/Task';

const ProfileScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [failMessager, setFailMessager] = useState<boolean>(false);
  const [inputEmailView, setInputEmailView] = useState<boolean>(false);
  const [inputPasswordView, setInputPasswordView] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const route = useRoute();
  const tasks = (route.params as { tasks?: Task[] })?.tasks;
  const { user, logout, setUser } = useAuth();

  const toggleEmailView = useCallback(() => {
    if (inputPasswordView) {
      setInputPasswordView(false);
    }

    setInputEmailView((prevState) => !prevState);
  }, [inputPasswordView]);

  const togglePasswordView = useCallback(() => {
    if (inputEmailView) {
      setInputEmailView(false);
    }
    setInputPasswordView((prevState) => !prevState);
  }, [inputEmailView]);

  const submitPatchUser = useCallback(async () => {
    try {
      setIsLoading(true);

      await new Promise(resolve => setTimeout(resolve, 1000));

      const credentials = {
        email,
        password,
        confirmPassword
      };

      const updatedUser = await api.put(`/users/${user?._id}`, credentials);



      setUser(updatedUser.data);
    } catch (error) {
      console.log(error);
      setFailMessager(true);
    } finally{
      setIsLoading(false);

      setTimeout(() => {
        setFailMessager(false);
      }, 2000);
    }
  }, [email, password, confirmPassword, user, setUser]);

  if (!user || !tasks) {
    return null;
  }

  return (
    <Container>
      <Content>
        <HeaderProfile>
          <Text color='#FFFFFF'>Profile</Text>

          <IconView>
            <Text
              color='#FFFFFF'
              size={26}
              weight='700'
            >{user.email.toUpperCase().charAt(0)}</Text>
          </IconView>

          <Text color='#FFFFFF'>{user.email}</Text>

          <TaskCountCard>
            <Text color='#FFFFFF'>
              {tasks.length} Task left
            </Text>
          </TaskCountCard>
        </HeaderProfile>

        <SettingsContainer>
          <Text color='#FFFFFF'>Account</Text>

          <SettingsContent
            onPress={toggleEmailView}
          >
            <SetingsAlign>
              <Image
                source={require('../../assets/icons/profileIcon.png')}
              />

              <Text color='#FFFFFF'>Change account email</Text>
            </SetingsAlign>

            <Image
              style={{ transform: [{ rotate: '-90deg' }]}}
              source={require('../../assets/icons/arrowDownIcon.png')}
            />
          </SettingsContent>

          {inputEmailView && (
            <Input
              value={email}
              onChangeText={(value: string) => setEmail(value)}
              placeholder='Enter your email'
              placeholderTextColor='#979797'
            />
          )}

          <SettingsContent
            onPress={togglePasswordView}
          >
            <SetingsAlign>
              <Image
                source={require('../../assets/icons/keyIcon.png')}
              />

              <Text color='#FFFFFF'>Change account password</Text>
            </SetingsAlign>

            <Image
              style={{ transform: [{ rotate: '-90deg' }]}}
              source={require('../../assets/icons/arrowDownIcon.png')}
            />
          </SettingsContent>

          {inputPasswordView && (
            <AlignSetting>
              <Input
                value={password}
                onChangeText={(value: string) => setPassword(value)}
                placeholder='Enter your password'
                placeholderTextColor='#979797'
                secureTextEntry
                maxLength={8}
              />

              <Input
                value={confirmPassword}
                onChangeText={(value: string) => setConfirmPassword(value)}
                placeholder='Confirm your password'
                placeholderTextColor='#979797'
                secureTextEntry
                maxLength={8}
              />
            </AlignSetting>
          )}

          <SettingsContent>
            <SetingsAlign>
              <Image
                source={require('../../assets/icons/cameraIcon.png')}
              />

              <Text color='#FFFFFF'>Change account image</Text>
            </SetingsAlign>

            <Image
              style={{ transform: [{ rotate: '-90deg' }]}}
              source={require('../../assets/icons/arrowDownIcon.png')}
            />
          </SettingsContent>

          {failMessager && (
            <Text color='#ff4949'>Novo email já está em uso!</Text>
          )}

          <Button
            isLoading={isLoading}
            onPress={submitPatchUser}
            disabled={email.length === 0 || password.length === 0 || confirmPassword.length === 0}
          >
            <Text color='#FFFFFF'>Alterar dados</Text>
          </Button>

          <ButtonLogout
            onPress={logout}
          >
            <Image
              source={require('../../assets/icons/logoutIcon.png')}
            />
            <Text color='#FF4949'>Log out</Text>
          </ButtonLogout>
        </SettingsContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default ProfileScreen;
