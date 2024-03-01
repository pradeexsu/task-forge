import { useState } from 'react';
import './App.css';
import FlexBox from './components/common/FlexBox';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import Text from './components/common/Text';
import UpdateTask from './components/UpdateTask';
import { useStore } from './store';

function App() {
  const { tasks, deleteTask, updateTask } = useStore();
  const [updateId, setUpdateId] = useState('');

  return (
    <>
      <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div className="flex items-start justify-between">
          <div className="flex flex-col w-full md:space-y-4">
            <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
              <FlexBox direction="column" gap={10}>
                <Text
                  size="2xl"
                  fontWeight="semibold"
                  className="text-gray-800 dark:text-white"
                >
                  Task Forge
                </Text>
                <TaskInput />
              </FlexBox>
              <FlexBox direction="column" gap={10} className="mt-4">
                {tasks?.map((task) =>
                  task?.id === updateId ? (
                    <UpdateTask
                      data={task}
                      key={task?.id}
                      onUpdate={(data) => {
                        updateTask(data);
                        setUpdateId('');
                      }}
                      onCancelUpdate={() => setUpdateId('')}
                    />
                  ) : (
                    <TaskItem
                      data={task}
                      key={task?.id}
                      onDelete={deleteTask}
                      setUpdateId={setUpdateId}
                    />
                  )
                )}
              </FlexBox>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
