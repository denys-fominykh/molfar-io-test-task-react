import React, { FC } from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

export interface ModalProps {
  handleClose: () => void;
  show: boolean;
  children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ handleClose, show, children }) => {
  const showHideClassName: string = show
    ? 'modal modal_position modal_display-block'
    : 'modal modal_position modal_display-none';

  return (
    <div className={showHideClassName}>
      <button
        className="modal__close-mobile-btn modal__close-mobile-btn_style"
        onClick={handleClose}
      >
        &#8592; Back to Memorial
      </button>
      <section className="modal__main-info modal__main-info_position">
        {children}
      </section>
      <a
        className="modal__close-desktop-btn modal__close-desktop-btn_style"
        href="/#"
        role="button"
        onClick={handleClose}
      />
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
