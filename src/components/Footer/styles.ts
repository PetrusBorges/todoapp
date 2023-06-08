import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 80px;
  padding: 0px 28px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #363636;
  position: relative;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const ButtonFooter = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Image = styled.Image``;

export const AddButton = styled.TouchableOpacity`
  width: 64px;
  height: 64px;
  padding: 16px;
  border-radius: 50px;
  background-color: #8687E7;
  position: absolute;
  top: -40%;
  left: 50%;
`;
