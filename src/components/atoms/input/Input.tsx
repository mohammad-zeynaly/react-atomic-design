import { ReactNode } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
  // UseFormRegister,
  // UseFormRegisterReturn,
} from "react-hook-form";

type TInput = {
  id: string;
  name: string;
  type: string;
  position?: string;
  className: string;
  placeholder: string;
  register?: UseFormRegister<FieldValues>;
  requiredMessage?: string;
  error?:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<FieldValues>>
    | undefined;
  registerOptions?: {
    pattern: {
      value: RegExp;
      message: string;
    };
  };
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  defaultValue?: string;
  readonly?: boolean;
  min?: number;
  max?: number;
  accept?: string;
};
const Input = ({
  className,
  id,
  name,
  placeholder,
  type,
  defaultValue,
  onChange,
  value,
  error,
  register,
  requiredMessage,
  registerOptions,
  readonly,
  min,
  max,
  position,
  accept,
}: TInput): JSX.Element => {
  return (
    <>
      <input
        id={id}
        className={`${className} ${
          error?.message ? "border-secondary focus:border-secondary" : ""
        }`}
        placeholder={placeholder}
        type={type}
        defaultValue={defaultValue}
        // onChange={(e) => {
        //   onChange && onChange(e);
        //   register.onChange(e);
        // }}

        {...register?.(name, {
          required: requiredMessage,
          onChange: (data) => {
            onChange && onChange(data);
          },
          ...registerOptions,
        })}
        name={name}
        value={value}
        readOnly={readonly ? readonly : false}
        min={min}
        max={max}
        accept={accept ?? ""}
      />
      {error?.message && (
        <span
          className={`text-secondary pt-2 pb-1 text-[13px] block ${
            position ? position : ""
          }`}
        >
          {error.message as ReactNode}
        </span>
      )}
    </>
  );
};

export default Input;
