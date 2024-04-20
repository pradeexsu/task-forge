interface ModalPrpops {
  children: React.ReactNode;
  closeOnOutsideClick?: boolean;
  open?: boolean;
}

function Modal({ children }: ModalPrpops) {
  return (
    <>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">{children}</p>
        </div>
      </div>
    </>
  );
}

export default Modal;
