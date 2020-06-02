import React, { FC } from 'react';

import './MemorialItemDetails.scss';
import img from '../../img/balanceofnature.jpg';
import calendarIcon from '../../img/icons/calendar.png';
import pinIcon from '../../img/icons/pin.png';

export const MemorialItemDetails: FC = () => {
  return (
    <div className="item-details item-details_flex">
      <div className="item-details__item-dropdown item-details__item-dropdown_flex">
        <a
          className="item-details__item-dropdown-btn item-details__item-dropdown-btn_style"
          href="/#"
        >
          &#183;&#183;&#183;
        </a>
        <div className="item-details__item-dropdown-content item-details__item-dropdown-content_style">
          <a
            className="item-details__item-dropdown-content-item item-details__item-dropdown-content-item_style"
            href="/#"
          >
            Contact owner
          </a>
          <a
            className="item-details__item-dropdown-content-item item-details__item-dropdown-content-item_style"
            href="/#"
          >
            Report this event
          </a>
        </div>
      </div>
      <div className="item-details__item-img-block item-details__item-img-block_position">
        <img
          className="item-details__item-img item-details__item-img_size"
          src={img}
          alt="memorial-img"
        />
      </div>
      <div className="item-details__item-info-block">
        <h1 className="item-details__item-heading item-details__item-heading_margin">
          Celebration of life
        </h1>
        <div className="item-details__item-info-container item-details__item-info-container_flex">
          <div className="item-details__item-time item-details__item-time_size">
            <div className="item-details__item-calendar item-details__item-calendar_content">
              <img
                className="item-details__item-calendar-icon item-details__item-calendar-icon_size"
                src={calendarIcon}
                alt="calendar-icon"
              />
              <div className="item-details__item-calendar-text item-details__item-calendar-text_style">
                <p>Friday, October 20, 2019</p>
                <p>9:00 AM - 2:00 PM</p>
                <a href="/#">Add to Calendar</a>
              </div>
            </div>
            <div className="item-details__item-pin item-details__item-pin_content">
              <img
                className="item-details__item-pin-icon item-details__item-pin-icon_size"
                src={pinIcon}
                alt="pin-icon"
              />
              <div className="item-details__item-pin-text item-details__item-pin-text_style">
                <p>St. Marry Church</p>
                <p>2475 Ericsson Str., IL 60169, USA</p>
                <a href="/#">Show on map</a>
              </div>
            </div>
          </div>
          <div className="item-details__item-about item-details__item-about_size">
            <h2 className="item-details__item-about-heading item-details__item-about-heading_style">
              About
            </h2>
            <p className="item-details__item-about-text item-details__item-about-text_style">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint
            </p>
          </div>
        </div>
        <button className="item-details__item-attending-btn item-details__item-attending-btn_style">
          &#10003; Attending
        </button>
      </div>
    </div>
  );
};
