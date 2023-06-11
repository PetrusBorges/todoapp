import { FC, useState, useEffect, useCallback } from 'react';
import useAuth from '../../hooks/useAuth';
import { api } from '../../services/api';

import { Text } from '../../components/Text';
import { Input } from '../../components/Input';
import { CategoryCard } from '../../components/CategoryCard';
import { DificultCard } from '../../components/DificultCard';
import { Button } from '../../components/Button';
import { Modal, TouchableOpacity, FlatList, Platform, ActivityIndicator } from 'react-native';
import {
  Overlay,
  ModalBody,
  Image,
  TaskTitleInfoContainer,
  AlignTitleContainer,
  ButtonTaskComplete,
  ButtonTask,
  Separator
} from './styles';

import { Category } from '../../@types/Category';
import { Task } from '../../@types/Task';
import dificultMock from '../../mock/dificultMock';

interface EditTaskModalProps {
  task: Task | null;
  visible: boolean;
  onClose: () => void;
  fetchTasks: () => void;
}

export const EditTaskModal: FC<EditTaskModalProps> = ({
  task,
  visible,
  onClose,
  fetchTasks
}) => {
  const [category, setCategory] = useState<Category[]>([]);
  const [inputView, setInputView] = useState<boolean>(false);
  const [categoryView, setCategoryView] = useState<boolean>(false);
  const [dificultView, setDificultView] = useState<boolean>(false);
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [categoryValue, setCategoryValue] = useState<string>('');
  const [dificultValue, setDificultValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState<boolean>(false);

  const { user } = useAuth();

  const getCategoryImage = (categoryName: string) => {
    switch (categoryName) {
    case 'Grocery':
      return require('../../assets/icons/category/breadIcon.png');
    case 'Work':
      return require('../../assets/icons/category/briefcaseIcon.png');
    case 'Design':
      return require('../../assets/icons/category/designIcon.png');
    case 'Health':
      return require('../../assets/icons/category/heartbeatIcon.png');
    case 'Home':
      return require('../../assets/icons/category/homeIcon.png');
    case 'Social':
      return require('../../assets/icons/category/megaphoneIcon.png');
    case 'Music':
      return require('../../assets/icons/category/musicIcon.png');
    case 'Sport':
      return require('../../assets/icons/category/sportIcon.png');
    case 'Study':
      return require('../../assets/icons/category/universityIcon.png');
    case 'Movie':
      return require('../../assets/icons/category/videoCameraIcon.png');
    }
  };

  const toggleInput = useCallback(() => {
    if (dificultView || categoryView) {
      setDificultView(false);
      setCategoryView(false);
    }

    setInputView((prevState) => !prevState);
  }, [dificultView, categoryView]);

  const toggleCategory = useCallback(() => {
    if (dificultView || inputView) {
      setDificultView(false);
      setInputView(false);
    }

    setCategoryView((prevState) => !prevState);
  }, [dificultView, inputView]);

  const toggleDificult = useCallback(() => {
    if (categoryView || inputView) {
      setCategoryView(false);
      setInputView(false);
    }

    setDificultView((prevState) => !prevState);
  }, [categoryView, inputView]);

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

  const submitUpdateTask = useCallback( async () => {
    try {
      setIsLoading(true);

      await new Promise(resolve => setTimeout(resolve, 1000));

      const credentials = {
        taskTitle,
        categoryValue,
        dificultValue
      };

      await api.put(`/users/${user?._id}/task/${task?._id}`, credentials);

      onClose();
      fetchTasks();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setTaskTitle('');
      setCategoryValue('');
      setDificultValue('');
    }
  }, [taskTitle, categoryValue, dificultValue, user, task, onClose, fetchTasks]);

  const deleteTask = useCallback( async () => {
    try {
      setIsLoadingDelete(true);

      await new Promise(resolve => setTimeout(resolve, 1000));

      await api.delete(`/users/${user?._id}/task/${task?._id}`);

      onClose();
      fetchTasks();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingDelete(false);
    }
  }, [user, task, onClose, fetchTasks]);

  if (!task) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
    >
      <Overlay
        behaviod={Platform.OS === 'android' ? 'height' : 'padding'}
      >
        <ModalBody>
          <TouchableOpacity
            onPress={onClose}
          >
            <Image
              source={require('../../assets/icons/closeIcon.png')}
            />
          </TouchableOpacity>

          <TaskTitleInfoContainer>
            <AlignTitleContainer>
              <ButtonTaskComplete
                isCompleted={task.isCompleted}
              />

              <Text color='#FFFFFF' weight='700' style={{ left: 10 }}>
                {task.taskTitle}
              </Text>
            </AlignTitleContainer>

            <TouchableOpacity
              onPress={toggleInput}
            >
              <Image
                source={require('../../assets/icons/editTaskTitleIcon.png')}
              />
            </TouchableOpacity>
          </TaskTitleInfoContainer>

          {inputView && (
            <Input
              value={taskTitle}
              onChangeText={(value: string) => setTaskTitle(value)}
              placeholder='Edit your task title'
              placeholderTextColor='#979797'
            />
          )}

          <TaskTitleInfoContainer>
            <AlignTitleContainer>
              <Image
                source={require('../../assets/icons/categoryAddIcon.png')}
              />

              <Text color='#FFFFFF' weight='700' style={{ left: 10 }}>
              Task Category:
              </Text>
            </AlignTitleContainer>

            <ButtonTask
              onPress={toggleCategory}
            >
              <Image
                source={getCategoryImage(task.categoryValue)}
              />

              <Text color='#FFFFFF'>
                {task.categoryValue}
              </Text>
            </ButtonTask>
          </TaskTitleInfoContainer>

          {categoryView && (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <Separator />}
              contentContainerStyle={{ paddingHorizontal: 5}}
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

          <TaskTitleInfoContainer>
            <AlignTitleContainer>
              <Image
                source={require('../../assets/icons/dificultIcon.png')}
              />

              <Text color='#FFFFFF' weight='700' style={{ left: 10 }}>
              Task Priority:
              </Text>
            </AlignTitleContainer>

            <ButtonTask
              onPress={toggleDificult}
            >
              <Image
                source={require('../../assets/icons/dificultIcon.png')}
              />

              <Text color='#FFFFFF'>
                {task.dificultValue}
              </Text>
            </ButtonTask>
          </TaskTitleInfoContainer>

          {dificultView && (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <Separator />}
              contentContainerStyle={{ paddingHorizontal: 5}}
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

          <TouchableOpacity
            onPress={deleteTask}
            style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
          >
            <Image
              source={require('../../assets/icons/trashIcon.png')}
            />
            {isLoadingDelete && (
              <ActivityIndicator
                color='#FF4949'
                size='small'
              />
            )}

            {!isLoadingDelete && (
              <Text color='#FF4949'>
            Delete Task
              </Text>
            )}
          </TouchableOpacity>

          <Button
            disabled={taskTitle.length <= 0 || categoryValue.length <= 0 || dificultValue.length <= 0}
            isLoading={isLoading}
            onPress={submitUpdateTask}
          >
            <Text color='#FFFFFF'>Edit Task</Text>
          </Button>
        </ModalBody>
      </Overlay>
    </Modal>
  );
};
