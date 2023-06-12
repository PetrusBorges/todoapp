import { FC } from 'react';

import { Text } from '../../components/Text';
import { Footer } from '../../components/Footer';
import {
  Container
} from './styles';

interface ProfileScreenProps {

}

const ProfileScreen: FC<ProfileScreenProps> = ({}) => {
  return (
    <Container>
      <Text color='#FFFFFF'>profile</Text>

      <Footer />
    </Container>
  );
};

export default ProfileScreen;
