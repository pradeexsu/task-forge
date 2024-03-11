import { BadgeVariant, ButtonVarient, TaskInfo, TaskStatus } from './typeings';

export const TODO_STATUS_OPTIONS = [
  { label: 'Todo', value: 'TODO' },
  { label: 'Done', value: 'DONE' },
  { label: 'Inprogress', value: 'IN_PROGRESS' },
];

export const TODO_INIT_VALUE: TaskInfo = {
  title: '',
  status: 'TODO',
  description: '',
  id: '',
};

export const STATUS_BADGE_MAPPING: Record<TaskStatus, BadgeVariant> = {
  ['TODO']: 'badge-info',
  ['DONE']: 'badge-success',
  ['IN_PROGRESS']: 'badge-accent',
};

export const STATUS_BUTTUN_MAPPING: Record<TaskStatus, ButtonVarient> = {
  ['TODO']: 'btn-info',
  ['DONE']: 'btn-success',
  ['IN_PROGRESS']: 'btn-accent',
};
