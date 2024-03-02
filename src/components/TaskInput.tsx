import { ChangeEvent, useState } from 'react';
import { useStore } from '../store';
import Button from './common/Button';
import FlexBox from './common/FlexBox';
import InputArea from './common/InputArea';
import InputFields from './common/InputFields';
import { ClassNameType, TaskInfo } from '../typeings';
import { TODO_INIT_VALUE, TODO_STATUS_OPTIONS } from '../const';

import { v4 as uuidv4 } from 'uuid';
import Select2 from './common/Select2';
interface TaskInputProps {
  className?: ClassNameType;
}
function TaskInput({ className = '' }: TaskInputProps) {
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
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }
    addTask({
      ...task,
      id: uuidv4(),
    });
    setTask(TODO_INIT_VALUE);
  };

  return (
    <FlexBox direction="column" gap={20} className={'w-full px-4 ' + className}>
      <FlexBox direction="column" gap={10} className="w-full">
        <InputFields
          placeholder="Task..."
          value={task?.task}
          name="task"
          error={error}
          onChange={onChangeHandler}
        />
        <InputArea
          placeholder="What's in you3r mind write down here..."
          value={task?.description}
          name="description"
          onChange={onChangeHandler}
        />
      </FlexBox>
      <FlexBox gap={10}>
        <Select2
          options={TODO_STATUS_OPTIONS}
          name="status"
          value={task?.status}
          onChange={onChangeHandler}
        />
        <Button onClick={handleAddTask} varient="primary">
          Add Task
        </Button>
      </FlexBox>
    </FlexBox>
  );
}

export default TaskInput;
