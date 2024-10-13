export interface ButtonProps {
  className?: React.ComponentProps<"button">["className"];
  label: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={`button min-[320px]:w-6/12 md:w-36 h-14 rounded-md uppercase flex flex-col ${props.className}`}
    >
      <span>{props.label}</span>
      {props.children}
    </button>
  );
};

export default Button;
