import { action, computed, makeObservable, observable } from 'mobx';
import TaskService from './task.service';
import { TASK_INIT_VALUE } from '../../const';
import { Task } from './typings';

class TaskStore extends TaskService {
  tasks: Task[] = [];
  deleteTaskId?: string;
  createOrUpdateTaskValue?: Task;
  isLoading: boolean = false;

  constructor() {
    super();
    makeObservable(this, {
      tasks: observable,
      createOrUpdateTaskValue: observable,
      isLoading: observable,
      deleteTaskId: observable,
      setUpdateTaskValue: action,
      clearUpdateTaskValue: action,
      addTask: action,
      deleteTaskById: action,
      updateTask: action,
      fetchTasks: action,
      putTask: action,
      setCreateOrUpdateTaskId: action,
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
    if (!id) {
      this.createOrUpdateTaskValue = TASK_INIT_VALUE;
      return;
    }
    const taskList = this.tasks.filter((task) => task.id === id);
    this.createOrUpdateTaskValue = taskList?.length > 0 ? taskList[0] : undefined;
  };

  setUpdateTaskValue = async (task?: Task) => {
    this.createOrUpdateTaskValue = task;
  };


  clearUpdateTaskValue = async () => {
    this.createOrUpdateTaskValue = undefined;
  };

  addTask = async (task: Task) => {
    const res = await this.postTask(task);

    if (res?.success) {
      task.id = res.data?.id
      this.tasks = [...this.tasks, task];
    } else {
<<<<<<< HEAD
=======
      console.log(res);
>>>>>>> 2d64651c7189a62421c29eca6956236c3a68432a
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
    if (res?.success) {
      this.tasks = this.tasks.map((task) =>
        task?.id !== updatedTask?.id ? task : updatedTask
      );
    } else {
      this.pushErrorNotification(res?.message);
    }
  };

  putTask = async (task: Task) => {
<<<<<<< HEAD
    if (task?.id === this.createOrUpdateTaskValue?.id) {
      this.setUpdateTaskValue(TASK_INIT_VALUE);
    }
=======
    this.setUpdateTaskValue(undefined);
    console.log('put: ', task);
>>>>>>> 2d64651c7189a62421c29eca6956236c3a68432a
    if (task?.id) {
      await this.updateTask(task);
    } else {
      await this.addTask(task);
    }
<<<<<<< HEAD
=======
    this.setUpdateTaskValue(TASK_INIT_VALUE)
>>>>>>> 2d64651c7189a62421c29eca6956236c3a68432a
  };

  fetchTasks = async () => {
    const res = await this.getTasks();
    if (res?.success) {
      this.tasks = res.data?.taskList || [];
    } else {
      this.pushErrorNotification(res?.message);
    }
    this.setUpdateTaskValue(TASK_INIT_VALUE);
  };
}

export default new TaskStore();
