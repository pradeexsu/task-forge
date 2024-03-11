// import { useState } from 'react';

import FlexBox from '../components/common/FlexBox';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';
import TaskInput from '../components/TaskInput';
import { useTaskStore } from '../store';
import TaskItem from '../components/TaskItem';
// import { TODO_INIT_VALUE } from '../const';

function Home() {
  const { tasks } = useTaskStore();
  // const tasks = Array.from({ length: 2 }, (_, i) => ({
  //   ...TODO_INIT_VALUE,
  //   title: `Task ${i}`,
  //   description: `Description ${i}`,
  //   id: i.toString(),
  // }));

  // const [updateId, setUpdateId] = useState('');
  const { deleteTask } = useTaskStore();

  return (
    <FlexBox
      className="h-screen w-full lg:px-[20%] md:px-[10%]"
      direction="column"
    >
      <NavBar />
      <TaskInput />

      <FlexBox
        direction="column"
        className=" justify-center w-full overflow-y-auto gap-2 min-h-[100vh-112px-266px]"
      >
        {tasks?.map((task) => (
          <TaskItem
            data={task}
            key={task?.id}
            onDelete={deleteTask}
            // setUpdateId={setUpdateId}
          />
        ))}
      </FlexBox>

      <Footer className="h-[112px] mt-auto" />
    </FlexBox>
  );
}

export default Home;
