import { ChangeEvent, Fragment, useState } from 'react';
import Button from './common/Button';
import FlexBox from './common/FlexBox';
import InputArea from './common/InputArea';
import InputFields from './common/InputFields';
import { ClassNameType } from '../typings';
import { TASK_INIT_VALUE, STATUS_OPTIONS } from '../const';

import Select from './common/Select';
import useTaskManager from '../hooks/useTaskManager';
import { Task } from '../service/typings';
import { useTaskStore } from '../store';

interface TaskInputProps {
  className?: ClassNameType;
  initTask?: Task;
  actionType?: 'Create' | 'Update';
}

function TaskInputModal({
  className = '',
  initTask = TASK_INIT_VALUE,
  actionType = 'Create',
}: TaskInputProps) {
  const { createTask, updateTask } = useTaskManager();
  const { setModalContent } = useTaskStore();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState<Task>(initTask);
  const handleAddTask = async () => {
    if (!task.title) {
      setError(true);
      return;
    }
    if (
      initTask?.title === task.title &&
      initTask?.description === task.description &&
      initTask?.status === task.status
    ) {
      setModalContent(
        <h3 className="font-bold text-lg">
          No changes to {actionType} your task!
        </h3>
      );
      return;
    }
    setLoading(true);
    let success;
    if (actionType === 'Create') {
      success = await createTask(task);
    } else {
      success = await updateTask(task);
    }

    if (success) {
      setModalContent(
        <h3 className="font-bold text-lg">Your Task {actionType}ed!</h3>
      );
    } else {
      setModalContent(
        <h3 className="font-bold text-lg">Failed to {actionType} your task!</h3>
      );
    }
  };

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name == 'task') setError(false);
    setTask((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  if (loading) {
    return <h3 className="font-bold text-lg">{actionType} your task...</h3>;
  }
  return (
    <Fragment>
      <h3 className="font-bold text-lg">{actionType} a Task!</h3>

      <FlexBox
        direction="column"
        gap={10}
        className={'w-full mt-5 ' + className}
      >
        <InputFields
          placeholder="Task..."
          value={task?.title}
          name="title"
          error={error}
          onChange={onChangeHandler}
        />
        <InputArea
          placeholder="What's in your mind?, write down here..."
          value={task?.description}
          name="description"
          onChange={onChangeHandler}
        />
        <FlexBox
          gap={10}
          justify="space-between"
          wrap="wrap"
          className="w-full mt-5"
        >
          <Select
            options={STATUS_OPTIONS}
            name="status"
            value={task?.status}
            onChange={onChangeHandler}
          />
          <Button
            onClick={handleAddTask}
            varient="btn-secondary"
            className="ml-auto"
          >
            {actionType}
          </Button>
          <form method="dialog">
            <button className="btn btn-sm  btn-outline">Close</button>
          </form>
        </FlexBox>
      </FlexBox>
    </Fragment>
  );
}

export default TaskInputModal;
