import { Link } from "react-router-dom";
import Button from "../../../components/atoms/button/Button";
import RoutesEnum from "../../../routers/RoutesEnum";
import InputFormSection from "../../../components/molecules/formSection/InputFormSection";
import { TReactHookFormRegister } from "../../../models/genralModels";

const LoginForm = ({
  register,
  errors,
}: TReactHookFormRegister): JSX.Element => {
  return (
    <form className="">
      <InputFormSection
        title="کد پرسنلی"
        name="personalCode"
        errors={errors}
        register={register}
        placeholder="مثال : 23450200"
        requiredMessage="وارد کردن کد پرسنلی الزامی می باشد"
      />

      <InputFormSection
        title="رمز عبور"
        name="password"
        errors={errors}
        register={register}
        placeholder="مثال : 23450200"
        requiredMessage="وارد کردن رمز عبور الزامی می باشد"
      />
      <Button
        className="bg-primary w-full rounded-lg text-white py-2 text-center my-4"
        title="ورود"
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
      <p className="text-center pt-3  text-sm">
        رمز عبور خود را فراموش کردید ؟
        <Link
          className="text-primary font-vazir_medium"
          to={RoutesEnum.FORGET_PASSWORD}
        >
          {" "}
          بازیابی رمز عبور
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
