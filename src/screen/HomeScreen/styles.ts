import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

interface ButtonTaskCompleteProps {
  isCompleted: boolean;
}

export const Container = styled.KeyboardAvoidingView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0px'};
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: #121212;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const IconView = styled.View`
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50px;
  background: #252626;
`;

export const SearchContainer = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 13px;
  border: 1px solid #979797;
  border-radius: 4px;
`;

export const Image = styled.Image``;

export const Input = styled.TextInput`
  width: 90%;
  color: #979797;
`;

export const TasksContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 40px;
  flex: 1;
  padding: 0px 20px;
`;

export const ButtonTaskHeader = styled.View`
  width: 150px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #363636;
  padding: 10px;
  border-radius: 6px;
`;

export const TaskCard = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  border-radius: 4px;
  background-color: #363636;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0px 40px;
`;

export const ButtonTaskComplete = styled.View<ButtonTaskCompleteProps>`
  width: 18px;
  height: 18px;
  border-radius: 50px;
  border: 1.5px solid rgba(255, 255, 255, 0.87);
  background-color: ${({ isCompleted }) => isCompleted ? 'rgba(255, 255, 255, 0.87)' : 'transparent'};
`;

export const TaskCardInfo = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
`;

export const TaskDetailsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const TaskCategoryCard = styled.View`
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #809CFF;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const TaskDificultCard = styled.View`
  padding: 4px 8px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #8687E7;
  gap: 5px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1.5px;
  background-color: rgba(255, 255, 255, 0.87);
  opacity: 0.2;
  margin: 14px 0px;
`;
