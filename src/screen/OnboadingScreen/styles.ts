import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native';

const isAndroid =  Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #121212;
`;

export const OnboadingContainer = styled.View`
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 32px;
`;

export const Image = styled.Image``;

export const InfoOnboading = styled.View`
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0px 25px;
`;

export const AccountContainer = styled.View`
  margin-top: 80px;
  padding: 10px 10px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const AccountItem = styled.View`
  align-items: center;
  justify-content: center;
`;
