import { Link } from "react-router-dom";
import Button from "../../../components/atoms/button/Button";
import RoutesEnum from "../../../routers/RoutesEnum";
import InputFormSection from "../../../components/molecules/formSection/InputFormSection";
import SelectFormSection from "../../../components/molecules/formSection/SelectFormSection";
import { TReactHookFormRegister } from "../../../models/genralModels";

const SignUpForm = ({
  register,
  errors,
}: TReactHookFormRegister): JSX.Element => {
  return (
    <form className="">
      <InputFormSection
        title="نام"
        name="name"
        errors={errors}
        register={register}
        placeholder="مثال : علی احساسی"
        requiredMessage="وارد کردن نام الزامی می باشد"
      />

      <InputFormSection
        title=" کد پرسنلی "
        name="personalCode"
        errors={errors}
        register={register}
        placeholder="مثال : 23450200"
        requiredMessage="وارد کردن  کد پرسنلی الزامی می باشد"
      />

      <SelectFormSection
        title="  جنسیت کاربر  "
        name="gender"
        errors={errors}
        register={register}
        options={[
          { title: "آقا", value: "male" },
          { title: "خانم", value: "female" },
        ]}
        placeholder="جنسیت کاربر را انتخاب کنید ...."
        requiredMessage="انتخاب جنسیت کاربر الزامی می باشد"
      />
      <InputFormSection
        title="ایمیل"
        name="email"
        errors={errors}
        register={register}
        placeholder="example@gmail.com"
        requiredMessage="وارد کردن ایمیل الزامی می باشد"
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
        className="bg-primary w-full rounded-lg text-white py-2 text-center mt-3"
        title="ثبت نام"
      />

      <>
        <p className="text-center pt-3 border-t border-solid border-[#dddddd]  text-sm">
          حساب کاربری دارید؟
          <Link
            className="text-primary font-vazir_medium"
            to={RoutesEnum.LOGIN}
          >
            {" "}
            ورود{" "}
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
      </>
    </form>
  );
};

export default SignUpForm;
