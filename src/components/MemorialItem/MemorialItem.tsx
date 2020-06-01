import React, { FC, useState } from 'react';

import './MemorialItem.scss';
import { Modal } from '../Modal';
import { MemorialItemDetails } from '../MemorialItemDetails';

export const MemorialItem: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const showModal = (): void => setVisible(true);
  const hideModal = (): void => setVisible(false);

  return (
    <section className="memorial-item">
      <Modal show={visible} handleClose={hideModal}>
        <MemorialItemDetails />
      </Modal>
      <button
        className="memorial-item__show-btn memorial-item__show-btn_style"
        onClick={showModal}
      >
        Show details
      </button>
    </section>
  );
};
