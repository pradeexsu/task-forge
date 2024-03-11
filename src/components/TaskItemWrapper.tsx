import UpdateTask from './UpdateTask';
import { TaskInfo } from '../typeings';
// import { useTaskStore } from '../store';
// import TaskItem from './TaskItem';

function TaskItemWrapper({
  task,
  // updateId,
  setUpdateId,
}: {
  task: TaskInfo;
  updateId: string;
  setUpdateId: (id: string) => void;
}) {
  // const { deleteTask, updateTask } = useTaskStore();

  return (
    <UpdateTask
      data={task}
      key={task?.id}
      onUpdate={() => {
        // updateTask(data);
        setUpdateId('');
      }}
      onCancelUpdate={() => setUpdateId('')}
    />
  );
}

export default TaskItemWrapper;
