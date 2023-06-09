import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
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
  width: 100%;
  padding: 0px 20px;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ButtonTaskHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #363636;
  padding: 10px;
  border-radius: 6px;
`;
