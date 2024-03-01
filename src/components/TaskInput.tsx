import { ChangeEvent, useState } from 'react';
import { useStore } from '../store';
import Button from './common/Button';
import Card from './common/Card';
import FlexBox from './common/FlexBox';
import InputArea from './common/InputArea';
import InputFields from './common/InputFields';
import Select from './common/Select';
import { TaskInfo } from '../typeings';
import { TODO_INIT_VALUE, TODO_STATUS_OPTIONS } from '../const';

import { v4 as uuidv4 } from 'uuid';

function TaskInput() {
  const { addTask } = useStore();
  const [error, setError] = useState(false);
  const [task, setTask] = useState<TaskInfo>(TODO_INIT_VALUE);

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name == 'task') setError(false);
    setTask((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddTask = () => {
    if (!task?.task) {
      setError(true);
      return;
    }
    addTask({
      ...task,
      id: uuidv4(),
    });
    setTask(TODO_INIT_VALUE);
  };

  return (
    <Card className="px-8 py-4 w-full">
      <FlexBox direction="column" gap={4}>
        <InputFields
          placeholder="Task..."
          value={task?.task}
          name="task"
          error={error}
          onChange={onChangeHandler}
        />
        <InputArea
          placeholder="What's in your mind write down here..."
          value={task?.description}
          name="description"
          onChange={onChangeHandler}
        />
        <Select
          opstions={TODO_STATUS_OPTIONS}
          name="status"
          value={task?.status}
          onChange={onChangeHandler}
        />
        <Button onClick={handleAddTask}> Add Task </Button>
      </FlexBox>
    </Card>
  );
}

export default TaskInput;
