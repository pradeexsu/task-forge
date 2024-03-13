import { ClassNameType, TaskStatus } from '../typings';
import FlexBox from './common/FlexBox';
import Text from './common/Text';
import { ChangeEvent, useCallback } from 'react';
import Button from './common/Button';
import Select2 from './common/Select';
import { Task } from '../service/typings';
import { STATUS_OPTIONS } from '../const';
import useTaskManager from '../hooks/useTaskManager';
import useModal from '../hooks/useModal';

interface TaskItemProps {
  data: Task;
  className?: ClassNameType;
}

function TaskItem({ data, className }: TaskItemProps) {
  const { title, description, status } = data;
  const { updateTask } = useTaskManager();
  const { openUpdateTaskModal, openDeleteTaskModal } = useModal();

  const onUpdateState = useCallback(
    async (e: ChangeEvent<HTMLSelectElement>) => {
      const status = e.target.value as TaskStatus;
      if (status === data?.status) return;
      await updateTask({ ...data, status: status });
    },
    [data, updateTask]
  );

  return (
    <FlexBox
      direction="column"
      className={`${className} p-4 mb-4  text-black shadow-lg border-2 rounded-lg bg-white w-full`}
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
          options={STATUS_OPTIONS}
          value={status}
          onChange={onUpdateState}
        />
        <Button
          onClick={() => {
            openUpdateTaskModal(data);
          }}
          className="cursor-pointer ml-auto btn-outline"
          varient="btn-success"
          label="Edit"
        />
        <Button
          onClick={() => openDeleteTaskModal(data)}
          className="cursor-pointer btn-outline"
          varient="btn-error"
          label="Delete"
        />
      </FlexBox>
    </FlexBox>
  );
}

export default TaskItem;
