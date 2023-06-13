import { useState, useCallback } from 'react';
import useAuth from '../../hooks/useAuth';

import { Text } from '../../components/Text';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';
import {
  Container,
  Content,
  HeaderProfile,
  IconView,
  TaskCountCard,
  SettingsContainer,
  SettingsContent,
  SetingsAlign,
  Image,
  ButtonLoggout
} from './styles';

const ProfileScreen = () => {
  const [inputEmailView, setInputEmailView] = useState<boolean>(false);
  const [inputPasswordView, setInputPasswordView] = useState<boolean>(false);

  const { user, logout } = useAuth();

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

  if (!user) {
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
              {user.tasks.length} Task left
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
            <Input
              placeholder='Enter your password'
              placeholderTextColor='#979797'
              secureTextEntry
              maxLength={8}
            />
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

          <ButtonLoggout
            onPress={logout}
          >
            <Image
              source={require('../../assets/icons/logoutIcon.png')}
            />
            <Text color='#FF4949'>Log out</Text>
          </ButtonLoggout>
        </SettingsContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default ProfileScreen;
