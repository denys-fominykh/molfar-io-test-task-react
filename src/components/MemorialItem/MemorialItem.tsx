import React, { FC, useState } from 'react';

import './MemorialItem.scss';
import { MemorialItemDetails } from '../MemorialItemDetails';

export const MemorialItem: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <section className="memorial-item">
      <button
        className="memorial-item__show-btn memorial-item__show-btn_style"
        onClick={(): void => setVisible(!visible)}
      >
        Show details
      </button>
      {visible ? <MemorialItemDetails /> : null}
    </section>
  );
};
