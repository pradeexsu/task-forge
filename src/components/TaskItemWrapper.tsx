import UpdateTask from './UpdateTask';
import { TaskInfo } from '../typeings';
import { useTaskStore } from '../store';
import TaskItem from './TaskItem';

function TaskItemWrapper({
  task,
  updateId,
  setUpdateId,
}: {
  task: TaskInfo;
  updateId: string;
  setUpdateId: (id: string) => void;
}) {
  const { deleteTask, updateTask } = useTaskStore();

  if (updateId === task?.id) {
    return (
      <UpdateTask
        data={task}
        key={task?.id}
        onUpdate={(data) => {
          updateTask(data);
          setUpdateId('');
        }}
        onCancelUpdate={() => setUpdateId('')}
      />
    );
  }

  return (
    <TaskItem
      data={task}
      key={task?.id}
      onDelete={deleteTask}
      setUpdateId={setUpdateId}
    />
  );
}

export default TaskItemWrapper;
