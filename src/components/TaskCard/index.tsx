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

export const TaskCard: FC<TaskCardProps> = ({
  task
}) => {
  return (
    <>
      <Container>
        <ButtonTaskComplete
          isCompleted={task.isCompleted}
        />

        <TaskCardInfo>
          <Text
            color="#FFFFFF"
          >
            {task.title}
          </Text>

          <TaskDetailsContainer>
            <TaskCategoryCard>
              <Image
                style={{ height: 25, width: 25 }}
                resizeMode='contain'
                source={require('../../assets/icons/category/universityIcon.png')}
              />

              <Text color="#FFFFFF">
                {task.category}
              </Text>
            </TaskCategoryCard>

            <TaskDificultCard>
              <Image
                source={require('../../assets/icons/dificultIcon.png')}
              />

              <Text color="#FFFFFF">
                {task.dificult}
              </Text>
            </TaskDificultCard>
          </TaskDetailsContainer>
        </TaskCardInfo>
      </Container>
    </>
  );
};
