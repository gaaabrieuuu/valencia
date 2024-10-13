import Classe from "@/interfaces/classe";
import Image from "next/image";
import FillableBar from "../shared/FillableBar";

export interface ClasseItemProps {
  classe: Classe;
  onClick: VoidFunction;
}

const ClasseItem = (props: ClasseItemProps) => {
  const { classe } = props;

  return (
    <div onClick={props.onClick} className="flex place-self-center items-center h-36 w-80 border-brown-500 border-8 shadow-xl pr-4 cursor-pointer">
      <Image
        height={130}
        width={130}
        alt="warrior icon"
        src={`/${classe.nome}_icon.png`}
      />
      <div className="w-full font-bold text-wooden-grey text-xl tracking-widest uppercase">
        <h2>{classe.nome}</h2>
        <span className="text-base font-semibold">DIFICULDADE</span>
        <FillableBar valor={classe.dificuldade}/>
      </div>
    </div>
  );
};

export default ClasseItem;