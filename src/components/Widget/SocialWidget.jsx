import React from 'react';
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <Div className="cs-social_btns cs-style1">

      <a
        href="/"
        onClick={handleClick}
        className="cs-center"
      >
        <Icon icon="fa6-brands:linkedin-in" />
      </a>

      <a
        href="/"
        onClick={handleClick}
        className="cs-center"
      >
        <Icon icon="fa6-brands:instagram" />
      </a>

      <a
        href="/"
        onClick={handleClick}
        className="cs-center"
      >
        <Icon icon="fa6-brands:facebook-f" />
      </a>

      <a
        href="/"
        onClick={handleClick}
        className="cs-center"
      >
        <Icon icon="fa6-brands:twitter" />
      </a>

    </Div>
  );
}