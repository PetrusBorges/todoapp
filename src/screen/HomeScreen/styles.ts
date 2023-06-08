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
