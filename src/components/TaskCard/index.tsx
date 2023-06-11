import { FC, useState, useCallback } from 'react';

import { Text } from '../../components/Text';
import { EditTaskModal } from '../EditTaskModal';
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
  fetchTasks: () => void;
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
  task,
  fetchTasks
}) => {
  const [editTaskModalVisible, setEditTaskModalVisible] = useState<boolean>(false);
  const [seletectedTask, setSeletectedTask] = useState<Task | null>(null);

  const categoryImage = getCategoryImage(task.categoryValue);

  const seletecTedTask = useCallback((task: Task) => {
    setEditTaskModalVisible(true);
    setSeletectedTask(task);
  }, []);

  return (
    <>
      <EditTaskModal
        visible={editTaskModalVisible}
        task={seletectedTask}
        onClose={() => setEditTaskModalVisible(false)}
        fetchTasks={fetchTasks}
      />

      <Container
        onPress={() => seletecTedTask(task)}
      >
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
