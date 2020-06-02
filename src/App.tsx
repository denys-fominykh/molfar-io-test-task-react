import React, { FC } from 'react';

import './App.scss';
import { Header } from './components/Header';

import { MemorialItem } from './components/MemorialItem';

export const App: FC = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <MemorialItem />
      </main>
    </React.Fragment>
  );
};
