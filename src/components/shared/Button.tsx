export interface ButtonProps {
  className?: React.ComponentProps<"div">["className"];
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <div className={`flex items-center justify-center w-36 h-14 shadow-xl bg-brown rounded-md text-xl ${props.className}`}>
      <span className="uppercase font-semibold tracking-widest">{props.label}</span>
    </div>
  );
};

export default Button;
