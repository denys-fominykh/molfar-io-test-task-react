import React, { FC } from 'react';
import logo from '../../img/molfarlogoclean.png';

import './Header.scss';

export const Header: FC = () => {
  const openMenu = (): void => {
    const overlay = document.querySelector(
      '.header__navigation-overlay',
    ) as HTMLInputElement;
    if (overlay) {
      overlay.style.height = '100%';
    }
  };

  const closeMenu = (): void => {
    const overlay = document.querySelector(
      '.header__navigation-overlay',
    ) as HTMLInputElement;
    if (overlay) {
      overlay.style.height = '0%';
    }
  };

  return (
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
          <div className="header__navigation-overlay header__navigation-overlay_style">
            <div className="header__navigation-overlay-content header__navigation-overlay-content_position">
              <a
                className="header__navigation-overlay-close-btn header__navigation-overlay-close-btn_style"
                href="/#"
                onClick={closeMenu}
              >
                &times;
              </a>
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
          </div>
        </div>
        <span
          className="header__navigation-overlay-open-btn header__navigation-overlay-open-btn_style"
          onClick={openMenu}
        >
          &#9776;
        </span>
      </nav>
    </header>
  );
};
