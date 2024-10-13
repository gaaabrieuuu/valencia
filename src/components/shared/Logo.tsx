export interface LogoProps {
  className?: React.ComponentProps<"div">["className"];
}

const Logo = (props: LogoProps) => {
  return (
    <img
      className={`transition ease-out duration-300 min-[320px]:w-8/12 md:w-6/12 lg:w-3/12 lg:hover:scale-110 ${props.className}`}
      src="/val_logo.png"
    />
  );
};

export default Logo;
