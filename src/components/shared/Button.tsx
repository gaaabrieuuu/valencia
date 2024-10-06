export interface ButtonProps {
  className?: React.ComponentProps<"div">["className"];
  label: string;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <div
      onClick={props.onClick}
      className={`button w-36 h-14 rounded-md uppercase ${props.className}`}
    >
      <span>{props.label}</span>
    </div>
  );
};

export default Button;
