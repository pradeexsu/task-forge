import { Task } from './service/typings';
import { BadgeVariant, ButtonVarient, TaskStatus } from './typings';

export const STATUS_OPTIONS = [
  { label: 'Open', value: 'OPEN' },
  { label: 'Done', value: 'DONE' },
  { label: 'Inprogress', value: 'IN_PROGRESS' },
];

export const TASK_INIT_VALUE: Task = {
  title: '',
  status: 'OPEN',
  description: '',
  id: '',
};

export const STATUS_BADGE_MAPPING: Record<TaskStatus, BadgeVariant> = {
  ['OPEN']: 'badge-info',
  ['DONE']: 'badge-success',
  ['IN_PROGRESS']: 'badge-warning',
};

export const STATUS_BUTTUN_MAPPING: Record<TaskStatus, ButtonVarient> = {
  ['OPEN']: 'btn-info',
  ['DONE']: 'btn-primary',
  ['IN_PROGRESS']: 'btn-warning',
};
