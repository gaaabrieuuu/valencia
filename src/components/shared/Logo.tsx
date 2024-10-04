export interface LogoProps {
  className?: React.ComponentProps<"div">["className"];
}

const Logo = (props: LogoProps) => {
  return (
    <img
      className={`transition ease-out duration-300 lg:w-5/12 lg:hover:scale-110 ${props.className}`}
      src="/val_logo.png"
    />
  );
};

export default Logo;
