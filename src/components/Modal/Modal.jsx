import { useEffect } from 'react';
import { Backdrop, ModalW } from './Modal.styled';

const Modal = ({ image, closeModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  const handleKeydown = e => {
    if (e.key === 'Escape') {
      closeModal(null);
    }
  };

  const handleClickByBackdrop = e => {
    if (e.target === e.currentTarget) {
      closeModal(null);
    }
  };

  return (
    <Backdrop onClick={handleClickByBackdrop}>
      <ModalW>
        <img src={image} alt="" />
      </ModalW>
    </Backdrop>
  );
};

export default Modal;
