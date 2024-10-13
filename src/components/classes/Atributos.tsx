import Classe from "@/interfaces/classe";
import FillableBar from "../shared/FillableBar";

export interface AtributosProps {
  classe: Classe;
}

const Atributos = (props: AtributosProps) => {
  const { classe } = props;

  return (
    <div className="bg-brown-200 rounded-3xl my-4 md:min-w-fit lg:w-1/3 pl-3 pr-10 py-3 shadow-lg max-md:m-4">
      {Object.keys(classe.atributos).map((item) => (
        <div key={item} className="flex items-center h-20 gap-3 w-full">
          <img src={`/${item}_icon.png`} alt="" className="h-20" />
          <div className="flex-1">
            <div className="flex items-end gap-4">
              <h1 className="font-bold text-brown-600 text-2xl tracking-widest uppercase">
                {item}
              </h1>
              <span className="font-semibold text-brown-600 text-base tracking-widest uppercase">
                base
              </span>
            </div>
            <FillableBar valor={classe.atributos[item]} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Atributos;
