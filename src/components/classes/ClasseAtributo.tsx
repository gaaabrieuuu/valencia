import FillableBar from "../shared/FillableBar";

const ClasseAtributo = () => {
  return (
    <div className="flex items-center h-20 gap-3 w-full">
      <img src="/dano_icon.png" alt="" className="h-20" />
      <div className="flex-1">
        <div className="flex items-end gap-4">
          <h1 className="font-bold text-brown-600 text-2xl tracking-widest uppercase">
            dano
          </h1>
          <span className="font-semibold text-brown-600 text-base tracking-widest uppercase">
            base
          </span>
        </div>
        <FillableBar />
      </div>
    </div>
  );
};

export default ClasseAtributo;
