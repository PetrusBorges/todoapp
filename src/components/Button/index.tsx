import { FC } from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  isOutlined?: boolean;
  disabled?: boolean;
  onPress: () => void;
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  isOutlined,
  disabled,
  onPress,
  isLoading
}) => {
  return (
    <Container
      onPress={onPress}
      isOutlined={isOutlined}
      disabled={disabled}
    >
      {isLoading ? (
        <ActivityIndicator size='small' color='#FFFFFF' />
      ) : (
        children
      )}
    </Container>
  );
};
