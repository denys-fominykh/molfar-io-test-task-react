import React, { FC } from 'react';

import './Modal.scss';

export interface ModalProps {
  handleClose: () => void;
  show: boolean;
  children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ handleClose, show, children }) => {
  const showHideClassName: string = show
    ? 'modal display-block'
    : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};
