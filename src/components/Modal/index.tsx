import React from 'react';
import ReactDOM from 'react-dom';
import './modal.scss';

const Modal = ({children}: {children: React.ReactNode}) => {
  return ReactDOM.createPortal(
    <div className="modal__container">
      <div className="modal__container-card">
      {children}

      </div>
    </div>,
    document.getElementById('modal') as HTMLElement
  );
}

export default Modal;
