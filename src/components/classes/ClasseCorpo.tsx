export interface ClasseCorpoProps {
    classe: string;
}

const ClasseCorpo = (props: ClasseCorpoProps) => {
    return(
        <div className="flex flex-col items-center my-4">
            <h1 className="font-bold text-brown-600 text-3xl tracking-widest uppercase">{props.classe}</h1>
            <img src={`/${props.classe}.png`} className="h-96" alt="class image" />
        </div>
    )
};

export default ClasseCorpo;
