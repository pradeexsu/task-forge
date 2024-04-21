import { ChangeEvent } from 'react';
import { STATUS_BUTTUN_MAPPING } from '../../const';
import { TaskStatus } from '../../typings';
import Button from './Button';

interface SelectProps {
  options?: {
    label: string;
    value: string;
  }[];
  disabled?: boolean;
  value?: string;
  name?: string;
  defaultValue?: string;
  direction?: 'top' | 'bottom';
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

function Select({
  options,
  value,
  onChange,
  name,
  disabled = false,
  direction = 'top',
}: SelectProps) {
  return (
    <div className={`dropdown dropdown-${direction}`}>
      <Button
        tabIndex={0}
        size="btn-xs"
        className={`rounded-s-badge rounded-e-badge z-50 ${disabled ? ' btn-disabled ' : ' cursor-pointer'}`}
        varient={STATUS_BUTTUN_MAPPING[value as TaskStatus]}
      >
        {value}
      </Button>

      <ul className="dropdown-content z-[50] menu p-2 shadow bg-white text-black rounded-lg w-52 border-2 relative">
        {options?.map(({ value, label }, i) => (
          <li
            key={value}
            tabIndex={i + 1}
            onClick={(e) => {
              if (!onChange) return;
              e?.currentTarget?.blur();
              onChange({
                target: {
                  value: value,
                  name: name,
                },
              } as ChangeEvent<HTMLSelectElement>);
            }}
          >
            <a className="hover:bg-gray-300">{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Select;
