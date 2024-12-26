import React, { useState } from 'react';
import './modal.css';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>Simple Modal Without Library</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setIsOpen(false)}>
              &times;
            </button>
            <p>
              This is a simple modal. Click outside or the close button to dismiss it.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
