import { ChangeEvent, useState } from 'react';
import Button from './common/Button';
import FlexBox from './common/FlexBox';
import InputArea from './common/InputArea';
import InputFields from './common/InputFields';
import { ClassNameType, TaskInfo } from '../typeings';
import { TODO_INIT_VALUE, TODO_STATUS_OPTIONS } from '../const';

import { v4 as uuidv4 } from 'uuid';
import Select from './common/Select';
import { useTaskStore } from '../store';

interface TaskInputProps {
  className?: ClassNameType;
  initTask?: TaskInfo;
  actionType?: 'Create' | 'Update';
}

function TaskInput({
  className = '',
  initTask = TODO_INIT_VALUE,
  actionType = 'Create',
}: TaskInputProps) {
  const { addTask } = useTaskStore();
  const [error, setError] = useState(false);
  const [task, setTask] = useState<TaskInfo>(initTask);

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
    if (!task?.title) {
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
  const closeModal = () => {
    const form = document.createElement('form');
    form.setAttribute('method', 'dialog');
    document?.getElementById('my_modal_2')?.appendChild(form);
    form?.submit();
    form.remove();
  };
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
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
            placeholder="What's in you3r mind write down here..."
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
              options={TODO_STATUS_OPTIONS}
              name="status"
              value={task?.status}
              onChange={onChangeHandler}
            />
            <Button
              onClick={handleAddTask}
              varient="btn-primary"
              className="ml-auto"
            >
              {actionType}
            </Button>
            <Button
              onClick={closeModal}
              varient="btn-accent"
              className="ml-auto"
            >
              Also Close
            </Button>
            <form method="dialog">
              <button className="btn btn-sm">Close</button>
            </form>
          </FlexBox>
        </FlexBox>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default TaskInput;
