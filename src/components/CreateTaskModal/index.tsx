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
  AlignDetails,
  CategoryContainer,
  CategoryCard,
  DificultContainer,
  DificultCard
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
  const [categoryValue, setCategoryValue] = useState<string>('');
  const [dificultValue, setDificultValue] = useState<string>('');

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

      const credentials = {
        taskTitle,
        categoryValue,
        dificultValue
      };

      alert(JSON.stringify(credentials));

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
  }, [taskTitle, categoryValue, dificultValue]);

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
            <CategoryContainer>
              <CategoryCard
                Grocery
                onPress={() => setCategoryValue('Grocery')}
              >
                <Image
                  source={require('../../assets/icons/category/breadIcon.png')}
                />
                <Text color='#010101'>Grocery</Text>
              </CategoryCard>

              <CategoryCard
                Work
                onPress={() => setCategoryValue('Work')}
              >
                <Image
                  source={require('../../assets/icons/category/briefcaseIcon.png')}
                />
                <Text color='#010101'>Work</Text>
              </CategoryCard>

              <CategoryCard
                Design
                onPress={() => setCategoryValue('Design')}
              >
                <Image
                  source={require('../../assets/icons/category/designIcon.png')}
                />
                <Text color='#010101'>Design</Text>
              </CategoryCard>

              <CategoryCard
                Health
                onPress={() => setCategoryValue('Health')}
              >
                <Image
                  source={require('../../assets/icons/category/heartbeatIcon.png')}
                />
                <Text color='#010101'>Health</Text>
              </CategoryCard>

              <CategoryCard
                Home
                onPress={() => setCategoryValue('Home')}
              >
                <Image
                  source={require('../../assets/icons/category/homeIcon.png')}
                />
                <Text color='#010101'>Home</Text>
              </CategoryCard>

              <CategoryCard
                Social
                onPress={() => setCategoryValue('Social')}
              >
                <Image
                  source={require('../../assets/icons/category/megaphoneIcon.png')}
                />
                <Text color='#010101'>Social</Text>
              </CategoryCard>

              <CategoryCard
                Music
                onPress={() => setCategoryValue('Music')}
              >
                <Image
                  source={require('../../assets/icons/category/musicIcon.png')}
                />
                <Text color='#010101'>Music</Text>
              </CategoryCard>

              <CategoryCard
                Sport
                onPress={() => setCategoryValue('Sport')}
              >
                <Image
                  source={require('../../assets/icons/category/sportIcon.png')}
                />
                <Text color='#010101'>Sport</Text>
              </CategoryCard>

              <CategoryCard
                Study
                onPress={() => setCategoryValue('Study')}
              >
                <Image
                  source={require('../../assets/icons/category/universityIcon.png')}
                />
                <Text color='#010101'>Study</Text>
              </CategoryCard>

              <CategoryCard
                Movie
                onPress={() => setCategoryValue('Movie')}
              >
                <Image
                  source={require('../../assets/icons/category/videoCameraIcon.png')}
                />
                <Text color='#010101'>Movie</Text>
              </CategoryCard>
            </CategoryContainer>
          )}

          {dificultView && (
            <DificultContainer>
              <DificultCard
                onPress={() => setDificultValue('1')}
              >
                <Image
                  source={require('../../assets/icons/dificultIcon.png')}
                />
                <Text color="#FFFFFF">1</Text>
              </DificultCard>

              <DificultCard
                onPress={() => setDificultValue('2')}
              >
                <Image
                  source={require('../../assets/icons/dificultIcon.png')}
                />
                <Text color="#FFFFFF">2</Text>
              </DificultCard>

              <DificultCard
                onPress={() => setDificultValue('3')}
              >
                <Image
                  source={require('../../assets/icons/dificultIcon.png')}
                />
                <Text color="#FFFFFF">3</Text>
              </DificultCard>

              <DificultCard
                onPress={() => setDificultValue('4')}
              >
                <Image
                  source={require('../../assets/icons/dificultIcon.png')}
                />
                <Text color="#FFFFFF">4</Text>
              </DificultCard>

              <DificultCard
                onPress={() => setDificultValue('5')}
              >
                <Image
                  source={require('../../assets/icons/dificultIcon.png')}
                />
                <Text color="#FFFFFF">5</Text>
              </DificultCard>

              <DificultCard
                onPress={() => setDificultValue('6')}
              >
                <Image
                  source={require('../../assets/icons/dificultIcon.png')}
                />
                <Text color="#FFFFFF">6</Text>
              </DificultCard>

              <DificultCard
                onPress={() => setDificultValue('7')}
              >
                <Image
                  source={require('../../assets/icons/dificultIcon.png')}
                />
                <Text color="#FFFFFF">7</Text>
              </DificultCard>

              <DificultCard
                onPress={() => setDificultValue('8')}
              >
                <Image
                  source={require('../../assets/icons/dificultIcon.png')}
                />
                <Text color="#FFFFFF">8</Text>
              </DificultCard>

              <DificultCard
                onPress={() => setDificultValue('9')}
              >
                <Image
                  source={require('../../assets/icons/dificultIcon.png')}
                />
                <Text color="#FFFFFF">9</Text>
              </DificultCard>

              <DificultCard
                onPress={() => setDificultValue('10')}
              >
                <Image
                  source={require('../../assets/icons/dificultIcon.png')}
                />
                <Text color="#FFFFFF">10</Text>
              </DificultCard>
            </DificultContainer>
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
