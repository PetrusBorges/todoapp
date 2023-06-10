import { FC, useState, useCallback } from 'react';

import { Text } from '../Text';
import { Input } from '../Input';
import { Modal, Platform, ActivityIndicator } from 'react-native';
import {
  Overlay,
  ModalBody,
  Header,
  Button,
  Image,
  DetailsTask,
  AlignDetails
} from './styles';

interface CreateTaskModalProps {
  visible: boolean;
  onClose: () => void;
}

export const CreateTaskModal: FC<CreateTaskModalProps> = ({
  visible,
  onClose,
}) => {
  const [categoryView, setCategoryView] = useState<boolean>(false);
  const [dificultView, setDificultView] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [taskTitle, setTaskTitle] = useState<string>('');

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

  const submitCreateTask = useCallback( async () => {
    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 3000));
      alert(JSON.stringify(taskTitle));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [taskTitle]);

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
            <Text color='#FFFFFF'>Add Task</Text>

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
            <Text color="#FFFFFF">category</Text>
          )}

          {dificultView && (
            <Text color="#FFFFFF">dificult</Text>
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
              >
                <Image
                  source={require('../../assets/icons/dificultIcon.png')}
                />
              </Button>
            </AlignDetails>

            <Button
              disabled
              onPress={submitCreateTask}
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
