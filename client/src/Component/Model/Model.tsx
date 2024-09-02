import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-lg mx-auto">
        {children}
        {/* <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button> */}
      </div>
    </div>
  );
};

export default Modal;
