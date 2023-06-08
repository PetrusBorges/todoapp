import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 13px 24px;
  background-color: #121212;
`;

export const Image = styled.Image``;

export const BackButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const CredentialsContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 30px;
`;

export const Credentials = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
`;

export const OrContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 30px 0px;
`;

export const OrDiv = styled.View`
  width: 44%;
  height: 1px;
  background-color: #979797;
`;

export const SocialButton = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 24px;
  border: 1px solid #8875FF;
  border-radius: 4px;
`;

export const RegisterLink = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
