import { FC, useState, useEffect } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../main/Main';

import { CreateTaskModal } from '../CreateTaskModal';
import { Text } from '../Text';
import {
  Container,
  ButtonFooter,
  Image,
  AddButton
} from './styles';

interface FooterProps {
  fetchTasks?: () => void;
}

type FooterNavigationProps = StackNavigationProp<RootStackParamList>

export const Footer: FC<FooterProps> = ({
  fetchTasks
}) => {
  const [createTaskModalVisible, setCreateTaskModalVisible] = useState<boolean>(false);
  const [homeSelected, setHomeSelected] = useState<boolean>(false);
  const [profileSelected, setProfileSelected] = useState<boolean>(false);

  const navigation = useNavigation<FooterNavigationProps>();
  const route = useRoute();

  useEffect(() => {
    const routeName = route.name;

    if (routeName === 'HomeScreen') {
      setHomeSelected(true);
      setProfileSelected(false);
    } else if (routeName === 'ProfileScreen') {
      setHomeSelected(false);
      setProfileSelected(true);
    }
  }, [route]);

  return (
    <>
      <CreateTaskModal
        fetchTasks={fetchTasks}
        visible={createTaskModalVisible}
        onClose={() => setCreateTaskModalVisible(false)}
      />

      <Container>
        <ButtonFooter
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Image
            source={homeSelected ? require('../../assets/icons/homeIconSelected.png') : require('../../assets/icons/homeIcon.png')}
          />
          <Text
            color='#FFFFFF'
            size={14}
            weight='400'
          >
            Home
          </Text>
        </ButtonFooter>

        <AddButton
          onPress={() => setCreateTaskModalVisible(true)}
        >
          <Image
            source={require('../../assets/icons/addIcon.png')}
          />
        </AddButton>

        <ButtonFooter
          onPress={() => navigation.navigate('ProfileScreen')}
        >
          <Image
            source={profileSelected ? require('../../assets/icons/profileIconSelected.png') : require('../../assets/icons/profileIcon.png')}
          />
          <Text
            color='#FFFFFF'
            size={14}
            weight='400'
          >
            Profile
          </Text>
        </ButtonFooter>
      </Container>
    </>
  );
};
