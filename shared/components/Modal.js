import React from 'react';
import SearchField from './SearchField'

const Modal = ({ handleSearchSubmit, handleSearchOpen }) => {
  return (
    <div className="modal-overlay">
      <button className="close-btn" onClick={handleSearchOpen}>
      </button>
      <SearchField handleSearchSubmit={handleSearchSubmit} />
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          width: 100%;
          height: 100vh;
          background-color: white;
          z-index: 150;
        }

        .close-btn {
          position: absolute;
          top: 80px;
          right: 15vw;
          width: 34px;
          height: 34px;
          padding: 5px;
          cursor: pointer;
          border: 0;
          background: transparent;
        }

        .close-btn:before,
        .close-btn:after {
          content: '';
          position: absolute;
          width: 2px;
          height: 24px;
          top: 5px;
          left: 16px;
          background-color: #222228;
          transform: rotate(-45deg);
        }

        .close-btn:after {
          transform: rotate(45deg);
        }
      `}</style>
    </div>
  );
};

export default Modal;
