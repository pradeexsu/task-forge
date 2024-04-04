import DeleteTaskConfirmModal from '../components/DeleteTaskConfirmModal';
import TaskInputModal from '../components/TaskInputModal';
import { Task } from '../modules/Task/typings';
import { useTaskStore } from '../store';

function useModal() {
  const { setModalContent } = useTaskStore();

  async function openCreateTaskModal() {
    setModalContent(<TaskInputModal />);
    openModal();
  }

  async function openUpdateTaskModal(task: Task) {
    setModalContent(<TaskInputModal actionType="Update" initTask={task} />);
    openModal();
  }

  async function openDeleteTaskModal({ title, id }: Task) {
    setModalContent(<DeleteTaskConfirmModal title={title} id={id} />);
    openModal();
  }

  async function openModal() {
    const modal = document?.getElementById('my_modal_2') as HTMLDialogElement;
    if (modal) {
      modal?.showModal();
    }
  }

  return {
    openModal,
    openCreateTaskModal,
    openUpdateTaskModal,
    openDeleteTaskModal,
  };
}

export default useModal;
