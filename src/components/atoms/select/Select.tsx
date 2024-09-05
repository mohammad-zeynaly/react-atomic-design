import { ReactNode } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from "react-hook-form";

type TSelect = {
  id: string;
  name: string;
  control?: unknown;
  className: string;
  onChange?: () => void;
  value?: string;
  defaultValue?: string;
  options: { title: string; value: string }[];
  register?: UseFormRegister<FieldValues>;
  requiredMessage?: string;
  error?:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<FieldValues>>
    | undefined;
  selected?: string;
};

const Select = (props: TSelect): JSX.Element => {
  const {
    options,
    register,
    name,
    requiredMessage,
    onChange,
    error,
    selected,
  } = props;
  return (
    <>
      <select
        {...register?.(name, {
          required: requiredMessage,
          onChange: () => {
            onChange && onChange();
          },
        })}
        {...props}
      >
        {selected && (
          <option value="" selected hidden>
            {selected}
          </option>
        )}
        {options.map((item, index) => (
          <option value={item.value} key={index}>
            {item.title}
          </option>
        ))}
      </select>
      {error?.message && (
        <span className={`text-secondary pt-2 pb-1 text-[13px] block`}>
          {error.message as ReactNode}
        </span>
      )}
    </>
  );
};

export default Select;
