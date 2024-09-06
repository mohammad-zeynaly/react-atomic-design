import SignUpForm from "../../../components/organism/auth/SignUpForm";
import { TReactHookFormRegister } from "../../../models/genralModels";
import FormHeader from "../../molecules/auth/FormHeader";

const SignUpTemplate = ({
  register,
  errors,
  handler,
}: TReactHookFormRegister): JSX.Element => {
  return (
    <section className="mt-8">
      <div className="container">
        <div className="max-w-md mx-auto shadow-[0_1px_7px_0_rgba(0,0,0,0.25)] py-6 px-4 rounded-lg bg-white">
        
          <FormHeader
            title="ثبت نام در تسکینو"
            img="https://picsum.photos/75/100"
          />
          <SignUpForm register={register} errors={errors} handler={handler} />
        </div>
      </div>
    </section>
  );
};

export default SignUpTemplate;
