export interface FillableBarProps {
  valor: number;
}

const FillableBar = (props: FillableBarProps) => {
  return (
    <div className="rounded-full bg-brown-700 h-3 w-full">
      <div
        style={{ width: `${props.valor * 10}%` }}
        className="h-full rounded-full bg-diddy-red"
      ></div>
    </div>
  );
};

export default FillableBar;
