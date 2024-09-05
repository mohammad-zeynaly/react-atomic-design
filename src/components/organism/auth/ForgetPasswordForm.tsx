import { Link } from "react-router-dom";
import Button from "../../../components/atoms/button/Button";
import RoutesEnum from "../../../routers/RoutesEnum";
import InputFormSection from "../../molecules/formSection/InputFormSection";
import { TReactHookFormRegister } from "../../../models/genralModels";

const ForgetPasswordForm = ({
  register,
  errors,
}: TReactHookFormRegister): JSX.Element => {
  return (
    <form className="">
      <InputFormSection
        title="ایمیل "
        name="email"
        errors={errors}
        register={register}
        placeholder="example@gmail.com"
        requiredMessage="وارد کردن ایمیل الزامی می باشد"
      />

      <Button
        className="bg-primary w-full rounded-lg text-white py-2 text-center my-4"
        title="بازیابی رمز عبور"
      />
      <p className="text-center pt-3 border-t border-solid border-[#dddddd]  text-sm">
        حساب کاربری ندارید؟
        <Link
          className="text-primary font-vazir_medium"
          to={RoutesEnum.SIGN_UP}
        >
          {" "}
          ثبت نام
        </Link>
      </p>
    </form>
  );
};

export default ForgetPasswordForm;
