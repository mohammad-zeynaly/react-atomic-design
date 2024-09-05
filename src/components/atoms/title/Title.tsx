type TTitle = {
  caption: string;
  className?: string;
};

const Title = ({ caption, className }: TTitle): JSX.Element => {
  return (
    <h1
      className={className ? className : "text-lg md:text-xl font-vazir_medium"}
    >
      {" "}
      {caption}{" "}
    </h1>
  );
};

export default Title;
