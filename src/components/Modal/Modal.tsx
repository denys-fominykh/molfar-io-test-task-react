import React, { FC } from 'react';

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
      <section className="modal__main-info modal__main-info_position">
        {children}
      </section>
      <a
        className="modal__close-btn modal__close-btn_style"
        href="/#"
        role="button"
        onClick={handleClose}
      />
    </div>
  );
};
