import SignUpForm from "../../../components/organism/auth/SignUpForm";
import { TReactHookFormRegister } from "../../../models/genralModels";

const SignUpTemplate = ({
  register,
  errors,
  handler,
}: TReactHookFormRegister): JSX.Element => {
  return (
    <section className="mt-8">
      <div className="container">
        <div className="max-w-md mx-auto shadow-[0_1px_7px_0_rgba(0,0,0,0.25)] py-6 px-4 rounded-lg bg-white">
          <div className="flex justify-center w-[7.5rem] h-[4.5rem] mx-auto">
            <img
              className="w-full rounded-lg object-cover"
              src="https://picsum.photos/75/100"
              alt="لوگو گلستان"
            />
          </div>
          <h5 className="text-center font-vazir_medium text-lg mt-4">
            ثبت نام در تسکینو
          </h5>
          <SignUpForm register={register} errors={errors} handler={handler} />
        </div>
      </div>
    </section>
  );
};

export default SignUpTemplate;
