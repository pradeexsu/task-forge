import { ChangeEvent, useState } from 'react';
import Button from './common/Button';
import FlexBox from './common/FlexBox';
import InputFields from './common/InputFields';
import { STATUS_OPTIONS, TASK_INIT_VALUE } from '../const';

import Select from './common/Select';
import taskStore from '../modules/Task/task.store';
import { observer } from 'mobx-react-lite';


function TaskInputModal() {
  const {
    setUpdateTaskValue,
    createOrUpdateTaskValue: task,
    putTask
  } = taskStore;

  const [error, setError] = useState(false);
  const actionType = task?.id ? "Update" : "Create";

  const closeModal = async () => {
    setUpdateTaskValue(TASK_INIT_VALUE)
  };

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name == 'task') setError(false);
    setUpdateTaskValue({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitTask = async () => {
    task && await putTask(task);
  }

  return (
    <FlexBox
      direction="column"
      gap={5}
      className={'w-full mt-2 z-0'}
    >
      <InputFields
        placeholder="Task..."
        value={task?.title}
        name="title"
        error={error}
        onChange={onChangeHandler}
      />
      <InputFields
        placeholder="What's in your mind?..."
        value={task?.description}
        name="description"
        onChange={onChangeHandler}
      />
      <FlexBox
        gap={5}
        justify="space-between"
        wrap="wrap"
        className="w-full mt-2"
      >
        <Select
          options={STATUS_OPTIONS}
          name="status"
          value={task?.status}
          onChange={onChangeHandler}
        />
        <FlexBox gap={5}>
          {actionType === "Update" && <Button
            outline
            onClick={closeModal}
            varient="btn-success"
            className="ml-auto"
          >
            Cancel
          </Button>}
          <Button
            disabled={!task?.title}
            onClick={handleSubmitTask}
            varient="btn-success"
            className="ml-auto"
          >
            {actionType}
          </Button>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}

export default observer(TaskInputModal);
