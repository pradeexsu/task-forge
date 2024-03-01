import { TaskInfo } from './typeings';

export const TODO_STATUS_OPTIONS = [
  { label: 'Todo', value: 'todo' },
  { label: 'Inprogress', value: 'inprogress' },
  { label: 'Done', value: 'done' },
  { label: 'Deffered', value: 'deffered' },
];

export const TODO_INIT_VALUE: TaskInfo = {
  task: '',
  description: '',
  status: 'todo',
  id: '',
};
