import { FC, useState, useCallback, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { api } from '../../services/api';

import { Text } from '../Text';
import { Input } from '../Input';
import { CategoryCard } from '../CategoryCard';
import { DificultCard } from '../DificultCard';
import { Modal, Platform, ActivityIndicator, FlatList } from 'react-native';
import {
  Overlay,
  ModalBody,
  Header,
  Button,
  Image,
  DetailsTask,
  AlignDetails,
  Separator
} from './styles';

import { Category } from '../../@types/Category';
import dificultMock from '../../mock/dificultMock';

interface CreateTaskModalProps {
  fetchTasks?: () => void;
  visible: boolean;
  onClose: () => void;
}

export const CreateTaskModal: FC<CreateTaskModalProps> = ({
  fetchTasks,
  visible,
  onClose,
}) => {
  const [category, setCategory] = useState<Category[]>([]);
  const [categoryView, setCategoryView] = useState<boolean>(false);
  const [dificultView, setDificultView] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [categoryValue, setCategoryValue] = useState<string>('');
  const [dificultValue, setDificultValue] = useState<string>('');

  const { user } = useAuth();

  const toggleCategory = useCallback(() => {
    if(dificultView) {
      setDificultView(false);
    }

    setCategoryView((prevState) => !prevState);
  }, [dificultView]);

  const toggleDificult = useCallback(() => {
    if(categoryView) {
      setCategoryView(false);
    }

    setDificultView((prevState) => !prevState);
  }, [categoryView]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await api.get('/category');

        setCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategory();
  }, []);

  const submitCreateTask = useCallback( async () => {
    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 3000));

      const credentials = {
        taskTitle,
        categoryValue,
        dificultValue
      };

      await api.post(`/users/${user?._id}/task`, credentials);

      fetchTasks?.();
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setTaskTitle('');
      setCategoryValue('');
      setDificultValue('');
      setIsLoading(false);
      setCategoryView(false);
      setDificultView(false);
    }
  }, [taskTitle, categoryValue, dificultValue, onClose, user, fetchTasks]);

  if (!user) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
    >
      <Overlay
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      >
        <ModalBody>
          <Header>
            <Text color='#FFFFFF'>
              {!categoryView && !dificultView && 'Add Task'}
              {categoryView && 'Add Category'}
              {dificultView && 'Add Dificult'}
            </Text>

            <Button
              onPress={onClose}
            >
              <Image
                source={require('../../assets/icons/closeIcon.png')}
              />
            </Button>
          </Header>

          {!categoryView && !dificultView && (
            <Input
              value={taskTitle}
              onChangeText={(value: string) => setTaskTitle(value)}
              placeholder='Your task title'
              placeholderTextColor='#979797'
            />
          )}

          {categoryView && (
            <FlatList
              horizontal
              ItemSeparatorComponent={() => <Separator/>}
              contentContainerStyle={{ paddingHorizontal: 5 }}
              showsHorizontalScrollIndicator={false}
              data={category}
              keyExtractor={category => category._id}
              renderItem={({ item: category }) => (
                <CategoryCard
                  category={category}
                  onPress={() => setCategoryValue(category._id)}
                />
              )}
            />
          )}

          {dificultView && (
            <FlatList
              horizontal
              ItemSeparatorComponent={() => <Separator/>}
              contentContainerStyle={{ paddingHorizontal: 5 }}
              showsHorizontalScrollIndicator={false}
              data={dificultMock}
              keyExtractor={dificult => dificult._id}
              renderItem={({ item: dificult }) => (
                <DificultCard
                  dificult={dificult}
                  onPress={() => setDificultValue(dificult._id)}
                />
              )}
            />
          )}

          <DetailsTask>
            <AlignDetails>
              <Button
                onPress={toggleCategory}
                disabled={taskTitle.length <= 0}
              >
                <Image
                  source={require('../../assets/icons/categoryAddIcon.png')}
                />
              </Button>

              <Button
                onPress={toggleDificult}
                disabled={taskTitle.length <= 0 || categoryValue.length <= 0}
              >
                <Image
                  source={require('../../assets/icons/dificultIcon.png')}
                />
              </Button>
            </AlignDetails>

            <Button
              onPress={submitCreateTask}
              disabled={taskTitle.length <= 0 || categoryValue.length <= 0 || dificultValue.length <= 0}
            >
              {isLoading && (
                <ActivityIndicator
                  size="small"
                  color="#8687E7"
                />
              )}

              {!isLoading && (
                <Image
                  source={require('../../assets/icons/createTaskIcon.png')}
                />
              )}
            </Button>
          </DetailsTask>
        </ModalBody>
      </Overlay>
    </Modal>
  );
};
