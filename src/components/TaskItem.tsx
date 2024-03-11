import { ClassNameType, TaskInfo, TaskStatus } from '../typeings';
import FlexBox from './common/FlexBox';
import Text from './common/Text';
import { ChangeEvent, ReactNode, useState } from 'react';
import Tooltip from './common/Tooltip';
import Button from './common/Button';
import Select2 from './common/Select';
import { TODO_STATUS_OPTIONS } from '../const';
import { useTaskStore } from '../store';

interface TaskItemProps {
  data: TaskInfo;
  onDelete?: (taskId: string) => void;
  setUpdateId?: (taskId: string) => void;
  className?: ClassNameType;
}

function TaskItem({ data, onDelete, setUpdateId, className }: TaskItemProps) {
  const { title, description, status, id } = data;
  const { updateTask } = useTaskStore();
  const [deleteState, setDeleteState] = useState('');

  const onClickDelete = () => {
    if (deleteState === '') {
      setDeleteState('confirm');
      setTimeout(() => {
        setDeleteState('');
      }, 2000);
    } else if (deleteState === 'confirm') {
      onDelete && onDelete(id);
      return;
    }
  };

  const onUpdateState = (e: ChangeEvent<HTMLSelectElement>) => {
    data['status'] = e.target.value as TaskStatus;
    updateTask(data);
  };

  const deleteIcon: Record<string, ReactNode> = {
    ['']: (
      <Tooltip text="Want to Delete Task?">
        <Button
          onClick={onClickDelete}
          className="cursor-pointer"
          varient="btn-error"
          label="Delete"
        />
      </Tooltip>
    ),
    ['confirm']: (
      <Tooltip text="Confirm?">
        <Button
          onClick={onClickDelete}
          className="cursor-pointer btn-accent "
          varient="btn-accent"
          label="Delete"
        />
      </Tooltip>
    ),
  };

  return (
    <FlexBox
      direction="column"
      className={`${className} p-4 mb-4  text-black shadow-lg bg-white w-full`}
      gap={5}
    >
      <Text size="text-xl" fontWeight="text-semibold">
        {title}
      </Text>
      <Text>{description}</Text>
      <FlexBox
        justify="space-between"
        grow={1}
        wrap="wrap"
        className="w-full"
        gap={20}
      >
        <Select2
          options={TODO_STATUS_OPTIONS}
          value={status}
          onChange={onUpdateState}
        />
        <Button
          onClick={() => {
            setUpdateId && setUpdateId(id);
          }}
          className="cursor-pointer ml-auto"
          varient="btn-primary"
          label="Edit"
        />
        {deleteIcon[deleteState]}
      </FlexBox>
    </FlexBox>
  );
}

export default TaskItem;
