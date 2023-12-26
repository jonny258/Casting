import React from 'react';

function Modal({ showModal, handleClose, title, children }) {
  if (!showModal) return null;

  return (
    <div className="modal modal-open" onClick={handleClose}>
      <div className="modal-box relative bg-gray-900 text-white" onClick={e => e.stopPropagation()}>
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <button 
          onClick={handleClose} 
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
  
}

export default Modal;
