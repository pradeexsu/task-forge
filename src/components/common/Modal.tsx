interface ModalPrpops {
  children: React.ReactNode;
  closeOnOutsideClick?: boolean;
}

function Modal({ children, closeOnOutsideClick = true }: ModalPrpops) {
  return (
    <dialog id="my_modal_2" className="modal ">
      <div className="modal-box rounded-sm">{children}</div>
      {closeOnOutsideClick && (
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      )}
    </dialog>
  );
}

export default Modal;
