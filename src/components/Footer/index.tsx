import { useState, useCallback } from 'react';

import { Text } from '../Text';
import {
  Container,
  ButtonFooter,
  Image,
  AddButton
} from './styles';

export const Footer = () => {
  const [homeSelected, setHomeSelected] = useState<boolean>(false);
  const [profileSelected, setProfileSelected] = useState<boolean>(false);

  const toggleHomeSelected = useCallback(() => {
    setHomeSelected((prevState) => !prevState);
  }, []);

  const toggleProfileSelected = useCallback(() => {
    setProfileSelected((prevState) => !prevState);
  }, []);

  return (
    <Container>
      <ButtonFooter
        onPress={toggleHomeSelected}
      >
        <Image
          source={homeSelected ? require('../../assets/icons/homeIconSelected.png') : require('../../assets/icons/homeIcon.png')}
        />
        <Text
          color='#FFFFFF'
          size={14}
          weight='400'
        >
        Home
        </Text>
      </ButtonFooter>

      <AddButton>
        <Image
          source={require('../../assets/icons/addIcon.png')}
        />
      </AddButton>

      <ButtonFooter
        onPress={toggleProfileSelected}
      >
        <Image
          source={profileSelected ? require('../../assets/icons/profileIconSelected.png') : require('../../assets/icons/profileIcon.png')}
        />
        <Text
          color='#FFFFFF'
          size={14}
          weight='400'
        >
        Profile
        </Text>
      </ButtonFooter>
    </Container>
  );
};
