import { useForm } from "react-hook-form";
import ForgetPasswordTemplate from "../../../components/templates/auth/ForgetPasswordTemplate";

const ForgetPasswordPage = (): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const forgetPasswordHandler = () => {
    // Todo : add logic
  };

  return (
    <ForgetPasswordTemplate
      register={register}
      errors={errors}
      handler={forgetPasswordHandler}
    />
  );
};

export default ForgetPasswordPage;
