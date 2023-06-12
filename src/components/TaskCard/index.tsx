import { FC, useState, useCallback } from 'react';
import { api } from '../../services/api';
import useAuth from '../../hooks/useAuth';
import { useGetCategoryImage } from '../../hooks/useGetCategoryImage';

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

export const TaskCard: FC<TaskCardProps> = ({
  task,
  fetchTasks
}) => {
  const [editTaskModalVisible, setEditTaskModalVisible] = useState<boolean>(false);
  const [seletectedTask, setSeletectedTask] = useState<Task | null>(null);

  const { user } = useAuth();
  const { getCategoryImage } = useGetCategoryImage();

  const seletectTask = useCallback((task: Task) => {
    setEditTaskModalVisible(true);
    setSeletectedTask(task);
  }, []);

  const submitCompleteTask = useCallback( async (task: Task) => {
    try {
      let credentials;

      if (task.isCompleted) {
        credentials = {
          isCompleted: false
        };
      } else {
        credentials = {
          isCompleted: true
        };
      }

      await api.put(`/users/${user?._id}/task/${task._id}/done`, credentials);

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  }, [user, fetchTasks]);

  return (
    <>
      <EditTaskModal
        visible={editTaskModalVisible}
        task={seletectedTask}
        onClose={() => setEditTaskModalVisible(false)}
        fetchTasks={fetchTasks}
        submitCompleteTask={submitCompleteTask}
      />

      <Container
        onPress={() => seletectTask(task)}
      >
        <ButtonTaskComplete
          isCompleted={task.isCompleted}
          onPress={() => submitCompleteTask(task)}
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
                source={getCategoryImage(task.categoryValue)}
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
