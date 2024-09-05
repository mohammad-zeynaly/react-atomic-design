import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export type TReactHookFormRegister = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  handler?: () => void;
};
