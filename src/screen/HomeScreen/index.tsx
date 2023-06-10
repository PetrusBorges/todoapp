import { useMemo, useState } from 'react';
import useAuth from '../../hooks/useAuth';

import { TaskCard } from '../../components/TaskCard';
import { Text } from '../../components/Text';
import { Footer } from '../../components/Footer';
import { Platform, FlatList, View, ActivityIndicator } from 'react-native';
import {
  Container,
  Header,
  IconView,
  SearchContainer,
  Image,
  Input,
  TasksContainer,
  ButtonTaskHeader,
  Separator
} from './styles';

import { Task } from '../../@types/Task';

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([
    {
      isCompleted: false,
      title: 'aaaaaa',
      category: 'Study',
      dificult: 1
    },
    {
      isCompleted: true,
      title: 'bbbbbbb',
      category: 'Home',
      dificult: 2
    },
    {
      isCompleted: true,
      title: 'asdasd',
      category: 'Home',
      dificult: 2
    },
    {
      isCompleted: true,
      title: 'ssdsdsd',
      category: 'Home',
      dificult: 2
    },
    {
      isCompleted: true,
      title: 'xcxcxcx',
      category: 'Home',
      dificult: 2
    },
    {
      isCompleted: true,
      title: 'xxcxcxxxcxcxcx',
      category: 'Home',
      dificult: 2
    }
  ]);
  const [searchTask, setSearchTask] = useState<string>('');

  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  const filteredTask = useMemo(() => {
    return tasks.filter((task) => (
      task.title.toLowerCase().includes(searchTask.toLowerCase())
    ));
  }, [tasks, searchTask]);

  return (
    <Container
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
    >
      <Header>
        <Text
          color="#FFFFFF"
          size={28}
          weight='700'
        >
          Home
        </Text>

        <IconView>
          <Text
            color='#FFFFFF'
            size={26}
            weight='700'
          >
            {user.email.toUpperCase().charAt(0)}
          </Text>
        </IconView>
      </Header>

      <SearchContainer>
        <Image
          source={require('../../assets/icons/searchIcon.png')}
        />
        <Input
          value={searchTask}
          onChangeText={(value: string) => setSearchTask(value)}
          placeholder="Search for your task..."
          placeholderTextColor='#979797'
        />
      </SearchContainer>

      <TasksContainer>
        {isLoading ? (
          <View
            style={{ flex: 1 ,alignItems: 'center', justifyContent: 'center' }}
          >
            <ActivityIndicator
              size="large"
              color="#8687E7"
            />
          </View>
        ) : (
          <>
            {filteredTask.length <= 0 && (
              <>
                <Image
                  source={require('../../assets/images/noTasks.png')}
                />
                <View
                  style={{ alignItems: 'center', justifyContent: 'center', gap: 10 }}
                >
                  <Text color='#FFFFFF' weight='700' size={18}>
                    What do you want to do today?
                  </Text>
                  <Text color='#FFFFFF'>
                    Tap + to add your tasks
                  </Text>
                </View>
              </>
            )}

            {filteredTask.length > 0 && (
              <>
                <ButtonTaskHeader>
                  <Text color="#FFFFFF"size={14}weight='400'>
                    {filteredTask.length} - Todo
                  </Text>
                  <Image
                    source={require('../../assets/icons/arrowDownIcon.png')}
                  />
                </ButtonTaskHeader>

                <FlatList
                  ItemSeparatorComponent={() => <Separator/>}
                  contentContainerStyle={{ paddingVertical: 5 }}
                  style={{ marginVertical: 10 }}
                  showsVerticalScrollIndicator={false}
                  data={filteredTask}
                  keyExtractor={task => task.title}
                  renderItem={({ item: task }) => (
                    <TaskCard
                      task={task}
                    />
                  )}
                />
              </>
            )}
          </>
        )}
      </TasksContainer>

      <Footer />
    </Container>
  );
};

export default HomeScreen;
