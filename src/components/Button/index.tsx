import { FC } from 'react';
import { Container } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  isOutlined?: boolean;
  disabled?: boolean;
  onPress: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  isOutlined,
  disabled,
  onPress
}) => {
  return (
    <Container
      onPress={onPress}
      isOutlined={isOutlined}
      disabled={disabled}
    >
      {children}
    </Container>
  );
};
