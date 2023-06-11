import { FC } from 'react';

import { Text } from '../../components/Text';
import {
  Container,
  ButtonTaskComplete,
  TaskCardInfo,
  TaskDetailsContainer,
  TaskCategoryCard,
  Image,
  TaskDificultCard,
} from './styles';

import { Task } from '../../@types/Task';

interface TaskCardProps {
  task: Task;
}

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

export const TaskCard: FC<TaskCardProps> = ({
  task
}) => {
  const categoryImage = getCategoryImage(task.categoryValue);

  return (
    <>
      <Container>
        <ButtonTaskComplete
          isCompleted={task.isCompleted}
          onPress={() => alert('Task Complete')}
        />

        <TaskCardInfo>
          <Text
            color="#FFFFFF"
          >
            {task.taskTitle}
          </Text>

          <TaskDetailsContainer>
            <TaskCategoryCard
              category={task.categoryValue}
            >
              <Image
                style={{ height: 25, width: 25 }}
                resizeMode='contain'
                source={categoryImage}
              />

              <Text color="#FFFFFF">
                {task.categoryValue}
              </Text>
            </TaskCategoryCard>

            <TaskDificultCard>
              <Image
                source={require('../../assets/icons/dificultIcon.png')}
              />

              <Text color="#FFFFFF">
                {task.dificultValue}
              </Text>
            </TaskDificultCard>
          </TaskDetailsContainer>
        </TaskCardInfo>
      </Container>
    </>
  );
};
