import { action, computed, makeObservable, observable } from 'mobx';
import { ReactNode } from 'react';
import TaskService from './task.service';
import { TASK_INIT_VALUE } from '../../const';
import { Task } from './typings';

class TaskStore extends TaskService {
  tasks: Task[] = [];
  modalContent?: ReactNode;
  deleteTaskId?: string;
  createOrUpdateTaskValue?: Task;
  isLoading = false;

  constructor() {
    super();
    makeObservable(this, {
      tasks: observable,
      modalContent: observable,
      createOrUpdateTaskValue: observable,
      setUpdateTaskValue: action,
      clearUpdateTaskValue: action,
      addTask: action,
      deleteTaskById: action,
      updateTask: action,
      fetchTasks: action,
      getDeleteTaskValue: computed,
    });
  }

  get getDeleteTaskValue() {
    const taskList = this.tasks.filter(
      (task) => task?.id === this.deleteTaskId
    );
    return taskList?.length > 0 ? taskList[0] : undefined;
  }

  setCreateOrUpdateTaskId = async (id?: string) => {
    if (id) {
      const taskList = this.tasks.filter((task) => task.id === id);
      this.createOrUpdateTaskValue =
        taskList?.length > 0 ? taskList[0] : undefined;
      return;
    }
    this.createOrUpdateTaskValue = TASK_INIT_VALUE;
  };

  setUpdateTaskValue = async (task: Task) => {
    this.createOrUpdateTaskValue = task;
  };

  setModalContent = async (content: ReactNode) => {
    this.modalContent = content;
  };

  clearUpdateTaskValue = async () => {
    this.createOrUpdateTaskValue = undefined;
  };

  addTask = async (task: Task) => {
    const res = await this.postTask(task);
    if (res?.success) {
      this.tasks.unshift(task);
    } else {
      console.log(res);
      this.pushErrorNotification(res?.message);
    }
  };

  deleteTaskById = async (id: string) => {
    const res = await this.deleteTask(id);
    if (res?.success) {
      this.tasks = this.tasks.filter((task) => task?.id !== id);
    } else {
      this.pushErrorNotification(res?.message);
    }
  };

  updateTask = async (updatedTask: Task) => {
    const res = await this.patchTask(updatedTask);
    if (!res?.success) {
      this.tasks = this.tasks.map((task) =>
        task?.id !== updatedTask?.id ? task : updatedTask
      );
    } else {
      this.pushErrorNotification(res?.message);
    }
  };

  fetchTasks = async () => {
    const res = await this.getTasks();
    if (res?.success) {
      this.tasks = res.data?.taskList || [];
    } else {
      this.pushErrorNotification(res?.message);
    }
  };
}

export default new TaskStore();
