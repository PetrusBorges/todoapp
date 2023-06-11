import styled from 'styled-components/native';

interface ButtonTaskCompleteProps {
  isCompleted: boolean;
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
  gap: 30px;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #363636;
  padding: 25px;
`;

export const Image = styled.Image``;

export const TaskTitleInfoContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AlignTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonTaskComplete = styled.TouchableOpacity<ButtonTaskCompleteProps>`
  width: 24px;
  height: 24px;
  border-radius: 50px;
  border: 1.5px solid rgba(255, 255, 255, 0.87);
  background-color: ${({ isCompleted }) => isCompleted ? '#0BB07B' : 'transparent'};
`;

export const ButtonTask = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #010101;
  padding: 8px 16px;
  border-radius: 6px;
`;

export const Separator = styled.View`
  width: 1.5px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.87);
  opacity: 0.2;
  margin: 0px 14px;
`;
