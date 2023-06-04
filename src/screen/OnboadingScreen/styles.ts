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
`;

export const Image = styled.Image``;

export const InfoOnboading = styled.View`
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 0px 50px 0px;
`;
