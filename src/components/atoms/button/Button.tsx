type TButton = {
  title?: string;
  className: string;
  // type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?: () => void;
  children?: JSX.Element;
  tooltip?: string;
};
const Button = (props: TButton) => {
  const { title, className, disabled, children, onClick, tooltip } = props;

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      title={tooltip}
    >
      {children ? children : title}
    </button>
  );
};

export default Button;
