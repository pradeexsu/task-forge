import { ChangeEvent } from 'react';
import { TASK_BADGE_MAPPING } from '../../const';
import { ButtonVarient, TaskStatus } from '../../typeings';
import Button from './Button';

interface SelectProps {
  options?: {
    label: string;
    value: string;
  }[];
  value?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

function Select2({ options, value, onChange, name }: SelectProps) {
  return (
    <div className="dropdown w-28">
      <Button
        tabIndex={0}
        className="rounded-badge m-1"
        varient={TASK_BADGE_MAPPING[value as TaskStatus] as ButtonVarient}
      >
        {value}
      </Button>

      <ul className="dropdown-content z-[1] menu p-2 shadow bg-white text-black  rounded-box w-52 ">
        {options?.map(({ value: val, label }) => (
          <li
            key={val}
            tabIndex={0}
            onClick={() =>
              onChange &&
              onChange({
                target: {
                  value: val,
                  name: name || '',
                },
              } as ChangeEvent<HTMLSelectElement>)
            }
          >
            <a className="hover:bg-gray-300">{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Select2;
