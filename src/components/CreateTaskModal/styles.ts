import styled from 'styled-components/native';

interface ButtonProps {
  disabled: boolean;
}

export const Overlay = styled.KeyboardAvoidingView`
  background-color: rgba(0, 0, 0, 0.6);
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

export const ModalBody = styled.View`
  width: 100%;
  border-radius: 16px;
  background-color: #363636;
  padding: 25px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  opacity: ${({ disabled }) => disabled ? '0.2' : '1'};
`;

export const Image = styled.Image``;

export const DetailsTask = styled.View`
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AlignDetails = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Separator = styled.View`
  width: 1.5px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.87);
  opacity: 0.2;
  margin: 0px 14px;
`;
