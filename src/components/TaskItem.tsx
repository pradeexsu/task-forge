import { ClassNameType, TaskStatus } from '../typings';
import FlexBox from './common/FlexBox';
import Text from './common/Text';
import { ChangeEvent, useCallback, useState } from 'react';
import Button from './common/Button';
import Select2 from './common/Select';
import { STATUS_OPTIONS } from '../const';
import { Task } from '../modules/Task/typings';
import taskStore from '../modules/Task/task.store';
import { observer } from 'mobx-react-lite';

interface TaskItemProps {
  data: Task;
  className?: ClassNameType;
  first?: boolean;
}

function TaskItem({ data, className, first }: TaskItemProps) {
  const { title, description, status, id } = data;
  const {
    deleteTaskById,
    setCreateOrUpdateTaskId,
    putTask,
    createOrUpdateTaskValue,
  } = taskStore;
  const [deleteing, setDeleting] = useState(false);
  const editing = createOrUpdateTaskValue?.id === id;

  const onUpdateStatus = useCallback(
    async (e: ChangeEvent<HTMLSelectElement>) => {
      const newStatus = e.target.value as TaskStatus;
      if (newStatus === data?.status) return;
      await putTask({ ...data, status: newStatus });
    },
    [data],
  );

  const onDelete = async () => {
    if (!id) return;
    setDeleting(true);
    await deleteTaskById(id);
  };
  const onEditing = async () => {
    if (id) {
      setCreateOrUpdateTaskId(id);
    }
  };

  return (
    <FlexBox
      direction="column"
      className={`${className} pl-4 pr-2 py-2  mb-2 text-black shadow-sm border-2 rounded-lg bg-white w-full`}
      gap={5}
    >
      <Text
        size="text-xl"
        fontWeight="text-semibold"
        className="w-full truncate"
      >
        {title}
      </Text>
      <Text className="truncate w-full">{description}</Text>
      <FlexBox
        justify="space-between"
        grow={1}
        wrap="wrap"
        className="w-full"
        gap={10}
      >
        <Select2
          options={STATUS_OPTIONS}
          value={status}
          disabled={editing || deleteing}
          onChange={onUpdateStatus}
          direction={first ? 'bottom' : 'top'}
          name="status"
        />
        <Button
          onClick={onEditing}
          className=" ml-auto"
          varient="btn-success"
          label={editing ? 'Editing...' : 'Edit'}
          disabled={editing || deleteing}
        />
        <Button
          onClick={onDelete}
          outline
          varient="btn-error"
          label={deleteing ? 'Delete...' : 'Delete'}
          disabled={editing || deleteing}
        />
      </FlexBox>
    </FlexBox>
  );
}

export default observer(TaskItem);
