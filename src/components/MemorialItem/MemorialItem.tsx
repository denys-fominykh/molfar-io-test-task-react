import React, { FC, useState } from 'react';

import './MemorialItem.scss';

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
      {visible ? <p>Hello, React!</p> : null}
    </section>
  );
};
