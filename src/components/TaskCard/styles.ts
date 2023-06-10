import styled from 'styled-components/native';

interface ButtonTaskCompleteProps {
  isCompleted: boolean;
}

export const Container = styled.TouchableOpacity`
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

export const Image = styled.Image``;

export const TaskDificultCard = styled.View`
  padding: 4px 8px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #8687E7;
  gap: 5px;
`;
