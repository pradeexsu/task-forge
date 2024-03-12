import { Fragment, useState } from 'react';
import Button from './common/Button';
import FlexBox from './common/FlexBox';
import useTaskManager from '../hooks/useTaskManager';
import { useTaskStore } from '../store';

interface DeleteTaskConfirmModalProps {
  id: string;
  title: string;
}

function DeleteTaskConfirmModal({ id, title }: DeleteTaskConfirmModalProps) {
  const { deleteTask } = useTaskManager();
  const { setModalContent } = useTaskStore();
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    setLoading(true);
    const success = await deleteTask(id);

    if (success) {
      setModalContent(<h3 className="font-bold text-lg">Task Deleted!</h3>);
    } else {
      setModalContent(
        <h3 className="font-bold text-lg">Failed to Delete task!</h3>
      );
    }
  };

  if (loading) {
    return <h3 className="font-bold text-lg">Deleting your task...</h3>;
  }
  return (
    <Fragment>
      <FlexBox direction="column">
        <h3 className="font-bold text-lg">Are you sure about Deleting Task?</h3>
        <div>{title}</div>
        <FlexBox gap={10} className="w-full justify-end">
          <Button
            onClick={onDelete}
            varient="btn-secondary"
            className="ml-auto"
          >
            Delete
          </Button>
          <form method="dialog">
            <button className="btn btn-sm  btn-outline">Close</button>
          </form>
        </FlexBox>
      </FlexBox>
    </Fragment>
  );
}

export default DeleteTaskConfirmModal;
