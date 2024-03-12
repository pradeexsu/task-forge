import { useCallback, useState } from 'react';
import { postTask, patchTask, deleteTask, getTasks } from '../service/api';
import { Task } from '../service/typings';
import { useTaskStore } from '../store';

function useTaskManager() {
  const [fetching, setFetching] = useState(false);

  const {
    addTask: addTaskToStore,
    updateTask: updateStoreTask,
    deleteTask: deleteStoreTask,
    setTasks,
  } = useTaskStore();

  async function fetchTasks() {
    if (fetching) return;
    const res = await getTasks();
    if (!res?.success) {
      setFetching(false);
      return false;
    }
    setTasks(res?.data?.taskList || []);
    setFetching(false);
    return true;
  }

  async function createTask(task: Task) {
    const res = await postTask(task);
    if (!res?.success) {
      return false;
    }
    addTaskToStore(task);
    return true;
  }

  async function updateTask(task: Task) {
    const res = await patchTask(task);
    if (!res?.success) {
      return false;
    }
    updateStoreTask(task);
    return true;
  }

  async function deleteTaskCall(id: string) {
    const res = await deleteTask(id);
    if (!res?.success) {
      return false;
    }
    deleteStoreTask(id);
    return true;
  }

  return {
    deleteTask: deleteTaskCall,
    fetchTasks: useCallback(fetchTasks, []),
    createTask,
    updateTask,
  };
}

export default useTaskManager;
