import { useForm } from "react-hook-form";
import LoginTemplate from "../../../components/templates/auth/LoginTemplate";

const LoginPage = (): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const loginignupHandler = () => {
    // Todo : add logic
  };

  return (
    <LoginTemplate
      register={register}
      errors={errors}
      handler={loginignupHandler}
    />
  );
};

export default LoginPage;
