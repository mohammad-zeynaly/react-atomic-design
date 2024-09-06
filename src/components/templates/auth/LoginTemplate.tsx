import LoginForm from "../../organism/auth/LoginForm";
import { TReactHookFormRegister } from "../../../models/genralModels";
import FormHeader from "../../molecules/auth/FormHeader";

const LoginTemplate = ({
  register,
  errors,
  handler,
}: TReactHookFormRegister): JSX.Element => {
  return (
    <section className="mt-12">
      <div className="container">
        <div className="max-w-md mx-auto shadow-[0_1px_7px_0_rgba(0,0,0,0.25)] py-6 px-4 rounded-lg bg-white">
          <FormHeader
            title="ورود به تسکینو"
            img="https://picsum.photos/75/100"
          />
          <LoginForm register={register} errors={errors} handler={handler} />
        </div>
      </div>
    </section>
  );
};

export default LoginTemplate;
