import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.KeyboardAvoidingView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0px'};
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #121212;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const HeaderProfile = styled.View`
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const IconView = styled.View`
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50px;
  background: #252626;
`;

export const TaskCountCard = styled.View`
  align-items: center;
  justify-content: center;
  padding: 17px 25px;
  background-color: #363636;
`;

export const SettingsContainer = styled.View`
  width: 100%;
  margin-top: 20px;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 0px 20px;
`;

export const SettingsContent = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AlignSetting = styled.View`
  flex-direction: row;
  width: 50%;
  align-items: center;
  justify-content: space-between;
`;

export const SetingsAlign = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Image = styled.Image``;

export const ButtonLogout = styled.TouchableOpacity`
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
