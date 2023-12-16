import React from 'react';

function Modal({ showModal, handleClose, title, children }) {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center" onClick={handleClose}>
      <div className="bg-white p-4 rounded shadow-lg" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center border-b-2 pb-2">
          <h2 className="text-lg font-bold">{title}</h2>
          <button onClick={handleClose} className="text-lg font-bold">
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
