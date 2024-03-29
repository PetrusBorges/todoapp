import { FC } from 'react';

import { Text } from '../Text';
import { Container, Image } from './styles';

import { Dificult } from '../../@types/Dificult';

interface DificultCardProps {
  dificult: Dificult;
  onPress: () => void;
}

export const DificultCard: FC<DificultCardProps> = ({
  dificult,
  onPress
}) => {
  return (
    <Container
      onPress={onPress}
    >
      <Image
        source={require('../../assets/icons/dificultIcon.png')}
      />
      <Text color="#FFFFFF">{dificult.value}</Text>
    </Container>
  );
};
