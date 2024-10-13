import Button from "../shared/Button";

export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = (props: ModalProps) => {
  return (
    <>
      <Button
        label="voltar"
        className={`max-h-fit max-w-fit py-2 px-4 m-2 absolute z-50 ${
          props.isOpen ? "visible" : "invisible"
        }`}
        onClick={props.onClose}
      />
      <div
        onClick={props.onClose}
        className={`fixed min-[320px]:py-4 inset-0 flex justify-center md:py-8 transition-colors overflow-y-auto ${
          props.isOpen ? "visible bg-black/30" : "invisible"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`w-11/12 min-h-max rounded-2xl border-brown-700 border-8 bg-brown-100 transition-all ${
            props.isOpen ? "scale-100 opacity-100" : "-scale-100 opacity-0"
          }`}
        >
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Modal;
