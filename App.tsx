import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import * as S from './styles';

export default function App() {
  return (
    <View>
      <S.TextStyled>Open up App.tsx to start working on your app!</S.TextStyled>
      <StatusBar style="auto" />
    </View>
  );
}
