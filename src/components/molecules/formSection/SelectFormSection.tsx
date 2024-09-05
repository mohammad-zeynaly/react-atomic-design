import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import Select from "../../atoms/select/Select";

type TSelectFormSection = {
  title: string;
  requiredMessage: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  options: { title: string; value: string }[];
};

const SelectFormSection = ({
  title,
  requiredMessage,
  name,
  placeholder,
  register,
  errors,
  options,
}: TSelectFormSection): JSX.Element => {
  return (
    <div className="mt-3" id="role">
      <label htmlFor="role" className="text-sm">
        {title} :
      </label>
      <Select
        name={name}
        id={name}
        className="border border-solid border-[#cbcbcb] bg-white rounded-lg w-full py-[10px] px-3 mt-[6px] placeholder:text-sm text-[15px] transition-all focus:border-primary placeholder:text-gray_dark"
        options={options}
        register={register}
        error={errors[name]}
        requiredMessage={requiredMessage}
        selected={placeholder}
      />
    </div>
  );
};

export default SelectFormSection;
