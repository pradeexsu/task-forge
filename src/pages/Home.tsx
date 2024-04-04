import FlexBox from '../components/common/FlexBox';
import Footer from '../components/common/Footer';
import NavBar from '../components/NavBar';
import TaskItem from '../components/TaskItem';
import Modal from '../components/common/Modal';
import taskStore from '../modules/Task/task.store';
import { observer } from 'mobx-react-lite';

function Home() {
  const { tasks, modalContent } = taskStore;

  return (
    <FlexBox
      className="h-screen w-full lg:px-[20%] md:px-[10%]"
      direction="column"
    >
      <NavBar />
      <FlexBox
        direction="column"
        className=" justify-center w-full overflow-y-auto gap-2 min-h-[100vh-112px-266px] pt-14"
      >
        {tasks?.map((task) => (
          <TaskItem data={task} key={task?.id} />
        ))}
      </FlexBox>
      <Modal>{modalContent}</Modal>
      <Footer className="h-[112px] mt-auto" />
    </FlexBox>
  );
}

export default observer(Home);
