import { Fragment } from 'react';
import Button from './common/Button';
import FlexBox from './common/FlexBox';
import taskStore from '../modules/Task/task.store';

interface DeleteTaskConfirmModalProps {
  id: string;
  title: string;
}

function DeleteTaskConfirmModal({ title, id }: DeleteTaskConfirmModalProps) {
  const { deleteTaskById, isLoading } = taskStore;

  const onDelete = async () => {
    deleteTaskById(id);
  };

  if (isLoading) {
    return <h3 className="font-bold text-lg">Deleting your task...</h3>;
  }
  return (
    <Fragment>
      <FlexBox direction="column">
        <h3 className="font-bold text-lg">Are you sure about Deleting Task?</h3>
        <div>{title}</div>
        <FlexBox gap={10} className="w-full justify-end">
          <Button onClick={onDelete} varient="btn-error" className="ml-auto">
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
