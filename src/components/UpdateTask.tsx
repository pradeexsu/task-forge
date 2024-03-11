import { TaskInfo } from '../typeings';
import FlexBox from './common/FlexBox';
import { ChangeEvent, useState } from 'react';
import { TODO_STATUS_OPTIONS } from '../const';
import InputFields from './common/InputFields';
import InputArea from './common/InputArea';
import Button from './common/Button';
import Select2 from './common/Select';

interface TaskItemProps {
  data: TaskInfo;
  onUpdate?: (data: TaskInfo) => void;
  onCancelUpdate?: () => void;
}

function UpdateTask({ data, onUpdate, onCancelUpdate }: TaskItemProps) {
  const [task, setTask] = useState(data);
  const [error, setError] = useState(false);

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name == 'task') setError(false);
    setTask((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <FlexBox
      className="p-4 mb-4 rounded-box w-full shadow-xl"
      direction="column"
      gap={20}
    >
      <FlexBox direction="column" gap={10} className="w-full">
        <InputFields
          value={task?.task}
          onChange={onChangeHandler}
          error={error}
          name="task"
        />
        <InputArea
          value={task?.description}
          onChange={onChangeHandler}
          name="description"
        />
      </FlexBox>
      <FlexBox gap={10}>
        <Select2
          options={TODO_STATUS_OPTIONS}
          value={task?.status}
          name="status"
          onChange={onChangeHandler}
        />
        <Button
          label="Update"
          varient="primary"
          onClick={() => onUpdate && onUpdate(task)}
        />
        <Button
          label="Cancel"
          varient="secondary"
          outline
          onClick={() => onCancelUpdate && onCancelUpdate()}
        />
      </FlexBox>
    </FlexBox>
  );
}

export default UpdateTask;
