type TImg = {
  src: string;
  alt: string;
  className?: string;
};
const Img = ({ src, alt, className }: TImg): JSX.Element => {
  return (
    <img
      className={className ?? "w-full rounded-lg object-cover"}
      src={src}
      alt={alt}
    />
  );
};

export default Img;
