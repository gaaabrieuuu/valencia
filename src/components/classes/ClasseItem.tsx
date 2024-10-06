import Image from "next/image";

const ClasseItem = () => {
    const dificult = 4.5*10;
    return (
        <div className="flex items-center h-36 w-80 border-brown-500 border-8 shadow-xl pr-4">
            <Image height={130} width={130} alt="warrior icon" src={'/guerreiro_icon.png'}/>
            <div className="w-full font-bold text-wooden-grey text-xl tracking-widest uppercase">
                <h2>GUERREIRO</h2>
                <span className="text-base font-semibold">DIFICULDADE</span>
                <div className="rounded-full bg-brown-700 h-3 w-full">
                    <div style={{width: `${dificult}%`}} className="h-full rounded-full bg-diddy-red"></div>
                </div>
            </div>
        </div>
    )
}   

export default ClasseItem;