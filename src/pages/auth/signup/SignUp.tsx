import { useForm } from "react-hook-form";
import SignUpTemplate from "../../../components/templates/auth/SignUpTemplate";

const SignUpPage = (): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const signupHandler = () => {
    // Todo : add logic
  };

  return (
    <SignUpTemplate
      register={register}
      errors={errors}
      handler={signupHandler}
    />
  );
};

export default SignUpPage;
