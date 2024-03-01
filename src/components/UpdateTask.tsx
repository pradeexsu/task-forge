import { TaskInfo } from '../typeings';
import Card from './common/Card';
import FlexBox from './common/FlexBox';
import { ChangeEvent, useState } from 'react';
import Select from './common/Select';
import { TODO_STATUS_OPTIONS } from '../const';
import InputFields from './common/InputFields';
import InputArea from './common/InputArea';
import Button from './common/Button';

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
    <Card className="px-8 py-4 w-full dark:bg-slate-500">
      <FlexBox direction="column" gap={4}>
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
        <Select
          opstions={TODO_STATUS_OPTIONS}
          value={task?.status}
          name="status"
          onChange={onChangeHandler}
        />
        <FlexBox gap={10}>
          <Button
            label="Update"
            varient="danger"
            onClick={() => onUpdate && onUpdate(task)}
          />
          <Button
            label="Cancel"
            varient="secondary"
            onClick={() => onCancelUpdate && onCancelUpdate()}
          />
        </FlexBox>
      </FlexBox>
    </Card>
  );
}

export default UpdateTask;
