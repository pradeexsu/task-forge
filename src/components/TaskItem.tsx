import { Delete, Edit, Info } from '@mui/icons-material';
import { BadgeVariant, TaskInfo, TaskStatus } from '../typeings';
import Badge from './common/Badge';
import Card from './common/Card';
import FlexBox from './common/FlexBox';
import Text from './common/Text';
import { ReactNode, useState } from 'react';
import Tooltip from './common/Tooltip';

interface TaskItemProps {
  data: TaskInfo;
  onDelete?: (taskId: string) => void;
  setUpdateId?: (taskId: string) => void;
}

function TaskItem({ data, onDelete, setUpdateId }: TaskItemProps) {
  const { task, description, status, id } = data;

  const [deleteState, setDeleteState] = useState('');

  const taskStatus: Record<TaskStatus, BadgeVariant> = {
    ['todo']: 'info',
    ['done']: 'success',
    ['inprogress']: 'warning',
    ['deffered']: 'danger',
  };
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

  const deleteIcon: Record<string, ReactNode> = {
    ['']: (
      <Tooltip text="Delete Task?">
        <Delete
          onClick={onClickDelete}
          className="cursor-pointer"
          color="error"
        />
      </Tooltip>
    ),
    ['confirm']: (
      <Tooltip text="Confirm Delete?">
        <Info
          onClick={onClickDelete}
          color="warning"
          className="cursor-pointer"
        />
      </Tooltip>
    ),
  };

  return (
    <Card className="px-8 py-4 w-full dark:bg-slate-500">
      <FlexBox justify="space-between">
        <FlexBox direction="column" gap={4}>
          <Text size="xl" fontWeight="semibold">
            {task}
          </Text>
          <Text size="sm" className="text-gray-400">
            {description}
          </Text>
          {status && <Badge lable={status} varient={taskStatus[status]} />}
        </FlexBox>
        <FlexBox justify="flex-end">
          <Edit
            onClick={() => setUpdateId && setUpdateId(id)}
            className="cursor-pointer"
            color="warning"
          />
          {deleteIcon[deleteState]}
        </FlexBox>
      </FlexBox>
    </Card>
  );
}

export default TaskItem;
