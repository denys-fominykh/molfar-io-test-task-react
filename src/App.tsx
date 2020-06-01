import React, { FC } from 'react';

import './App.scss';
import logo from './img/molfarlogoclean.png';

import { MemorialItem } from './components/MemorialItem';

export const App: FC = () => {
  return (
    <React.Fragment>
      <header className="header header_color">
        <nav className="header__navigation header__navigation_flex">
          <div className="header__navigation-logo header__navigation-logo_position">
            <a className="header__navigation-link" href="/#">
              <img
                className="header__navigation-logo-link header__navigation-logo-link_size"
                src={logo}
                alt="logo"
              />
            </a>
          </div>
          <div className="header__navigation-links header__navigation-links_position">
            <a
              className="header__navigation-link header__navigation-link_style"
              href="/#"
            >
              My Memorials
            </a>
            <a
              className="header__navigation-link header__navigation-link_style"
              href="/#"
            >
              Memory App
            </a>
            <a
              className="header__navigation-link header__navigation-link_style"
              href="/#"
            >
              Services
            </a>
            <a
              className="header__navigation-link header__navigation-link_style"
              href="/#"
            >
              About Ecorial
            </a>
            <a
              className="header__navigation-link header__navigation-link_style"
              href="/#"
            >
              Account
            </a>
            <a
              className="header__navigation-link header__navigation-link_style"
              href="/#"
            >
              Help
            </a>
            <a
              className="header__navigation-link header__navigation-add-link_style"
              href="/#"
            >
              Add memorial
            </a>
          </div>
        </nav>
      </header>
      <main>
        <MemorialItem />
      </main>
    </React.Fragment>
  );
};
