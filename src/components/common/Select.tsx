import { ChangeEvent } from 'react';
import { STATUS_BUTTUN_MAPPING } from '../../const';
import { TaskStatus } from '../../typings';
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

function Select({ options, value, onChange, name }: SelectProps) {
  return (
    <div className="dropdown dropdown-top">
      <Button
        tabIndex={0}
        className="rounded-s-badge rounded-e-badge z-50"
        varient={STATUS_BUTTUN_MAPPING[value as TaskStatus]}
      >
        {value}
      </Button>

      <ul className="dropdown-content z-50 menu p-2 shadow bg-white text-black rounded-box w-52 border-2">
        {options?.map(({ value, label }) => (
          <li
            key={value}
            tabIndex={0}
            onClick={() =>
              onChange &&
              onChange({
                target: {
                  value: value,
                  name: name,
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

export default Select;
