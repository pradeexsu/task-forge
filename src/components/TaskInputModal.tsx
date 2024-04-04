import { ChangeEvent, Fragment, useEffect, useState } from 'react';
import Button from './common/Button';
import FlexBox from './common/FlexBox';
import InputArea from './common/InputArea';
import InputFields from './common/InputFields';
import { ClassNameType } from '../typings';
import { STATUS_OPTIONS } from '../const';

import Select from './common/Select';
import taskStore from '../modules/Task/task.store';

interface TaskInputProps {
  className?: ClassNameType;
  id?: string;
  actionType?: 'Create' | 'Update';
}

function TaskInputModal({
  className = '',
  id,
  actionType = 'Create',
}: TaskInputProps) {
  const [error, setError] = useState(false);
  const {
    isLoading,
    setUpdateTaskValue,
    createOrUpdateTaskValue: task,
    setCreateOrUpdateTaskId,
  } = taskStore;

  useEffect(() => {
    setCreateOrUpdateTaskId(id);
  }, []);

  const handleAddTask = async () => {};

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name == 'task') setError(false);

    setUpdateTaskValue({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  if (isLoading) {
    return <h3 className="font-bold text-lg">{actionType}ing your task...</h3>;
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
            varient="btn-success"
            className="ml-auto"
          >
            {actionType}
          </Button>
          <form method="dialog">
            <button className="btn btn-sm btn-success btn-outline">
              Close
            </button>
          </form>
        </FlexBox>
      </FlexBox>
    </Fragment>
  );
}

export default TaskInputModal;
