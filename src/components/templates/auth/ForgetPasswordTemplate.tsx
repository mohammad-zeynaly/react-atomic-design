import ForgetPasswordForm from "../../../components/organism/auth/ForgetPasswordForm";
import { TReactHookFormRegister } from "../../../models/genralModels";
import FormHeader from "../../molecules/auth/FormHeader";

const ForgetPasswordTemplate = ({
  register,
  errors,
  handler,
}: TReactHookFormRegister): JSX.Element => {
  console.log("errors-> ", errors);
  return (
    <section className="mt-12">
      <div className="container">
        <div className="max-w-md mx-auto shadow-[0_1px_7px_0_rgba(0,0,0,0.25)] py-6 px-4 rounded-lg bg-white">
          <FormHeader
            title="بازیابی رمز عبور"
            img="https://picsum.photos/75/100"
          />
          <ForgetPasswordForm
            register={register}
            errors={errors}
            handler={handler}
          />
        </div>
      </div>
    </section>
  );
};

export default ForgetPasswordTemplate;
