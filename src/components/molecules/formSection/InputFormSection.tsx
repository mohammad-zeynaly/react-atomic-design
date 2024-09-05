import Input from "../../atoms/input/Input";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type TInputFormSection = {
  title: string;
  requiredMessage: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

const InputFormSection = ({
  title,
  requiredMessage,
  name,
  placeholder,
  register,
  errors,
}: TInputFormSection): JSX.Element => {
  return (
    <div className="mt-4">
      <label htmlFor={name} className="text-sm">
        {title} :
      </label>
      <Input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        className="border border-solid border-[#777777] rounded-lg w-full py-[10px] px-3 mt-2 placeholder:text-sm text-[15px] transition-all focus:border-primary"
        error={errors[name]}
        register={register}
        requiredMessage={
          requiredMessage ?? "وارد کردن مقدار این فیلد الزامی می باشد"
        }
      />
    </div>
  );
};

export default InputFormSection;
