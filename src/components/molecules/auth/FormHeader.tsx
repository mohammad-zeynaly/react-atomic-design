import Img from "../../atoms/img/Img";

type TFormHeader = {
  title: string;
  img: string;
};
const FormHeader = ({ title, img }: TFormHeader): JSX.Element => {
  return (
    <>
      <div className="flex justify-center w-[7.5rem] h-[4.5rem] mx-auto">
        <Img src={img ?? "https://picsum.photos/75/100"} alt="لوگو" />
      </div>
      <h5 className="text-center font-vazir_medium text-lg mt-4">{title} </h5>
    </>
  );
};

export default FormHeader;
