import { useState } from 'react';
import TaskInput from '../components/TaskInput';
import FlexBox from '../components/common/FlexBox';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';
import TaskItemWrapper from '../components/TaskItemWrapper';
import { useTaskStore } from '../store';

function Home() {
  const { tasks } = useTaskStore();
  const [updateId, setUpdateId] = useState('');
  return (
    <FlexBox
      className="h-screen w-full lg:px-[20%] md:px-[10%]"
      direction="column"
    >
      <NavBar />
      <TaskInput className="sticky " />
      <FlexBox
        direction="column"
        className="bg-gray-100 justify-center w-full overflow-y-auto gap-2 h-[100vh-112px-266px]"
      >
        {tasks?.map((task) => (
          <TaskItemWrapper
            setUpdateId={setUpdateId}
            updateId={updateId}
            key={task.id}
            task={task}
          />
        ))}
      </FlexBox>
      <Footer className="h-[112px] bottom-0 sticky" />
    </FlexBox>
  );
}

export default Home;
