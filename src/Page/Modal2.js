import React from "react";
import "../css/Modal2Style.css";

 
function Modal2(props) {
 
function closeModal() {
    props.closeModal();
  }
 
  return (
    <div className="modal2Background" onClick={closeModal}>
      <div className="modal2Body" onClick={(e) => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
}
 
export default Modal2;