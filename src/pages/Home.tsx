import FlexBox from '../components/common/FlexBox';
import Footer from '../components/common/Footer';
import NavBar from '../components/NavBar';
import TaskItem from '../components/TaskItem';
import taskStore from '../modules/Task/task.store';
import { observer } from 'mobx-react-lite';
import TaskInputModal from '../components/TaskInputModal';
import { useEffect } from 'react';

function Home() {
  const { tasks, fetchTasks } = taskStore;

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <FlexBox
      className="h-screen w-full lg:px-[20%] md:px-[10%]"
      direction="column"
    >
      <NavBar />
      <TaskInputModal />
      <FlexBox
        direction="column"
        className=" justify-center w-full overflow-y-auto gap-2 h-full mt-2 px-2"
      >
        {tasks?.map((task, idx) => (
          <TaskItem data={task} key={task?.id} first={idx === 0} />
        ))}
      </FlexBox>
      <Footer className="h-[112px] mt-auto" />
    </FlexBox>
  );
}

export default observer(Home);
