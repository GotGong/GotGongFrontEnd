import React from "react";
import "../css/ModalStyle.css";
import { AiOutlineClose } from "react-icons/ai";

 
function Modal(props) {
 
function closeModal() {
    props.closeModal();
  }
 
  return (
    <div className="modalBackground" onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <AiOutlineClose id="x" onClick={closeModal} size='24'></AiOutlineClose>
        {props.children}
      </div>
    </div>
  );
}
 
export default Modal;