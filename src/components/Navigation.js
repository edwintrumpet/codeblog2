/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'gatsby';
import MenuIcon from '../assets/icons/MenuIcon';
import CloseIcon from '../assets/icons/CloseIcon';
import '../styles/components/Navigation.css';
import { dark } from '../utils/state';
import menuItems from '../../content/meta/navigation';

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  let navigationMobileClass = 'navigation__mobile';
  if (showMenu) navigationMobileClass += ' navigation__mobile--open';
  if (dark) navigationMobileClass += ' dark-background dark-full-contrast';
  else navigationMobileClass += ' light-background light-full-contrast';

  const handleClick = () => setShowMenu(!showMenu);

  return (
    <>
      <div className="navigation__desktop">
        <ul>
          {menuItems.map((item) => (
            <Link to={item.url} key={item.name}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="navigation__menu-icon">
        <MenuIcon onClick={handleClick} />
      </div>
      <div
        onClick={handleClick}
        className={showMenu
          ? 'navigation__mobile-background navigation__mobile-background--open'
          : 'navigation__mobile-background'}
      />
      <div className={navigationMobileClass}>
        <ul>
          {menuItems.map((item) => (
            <Link to={item.url} key={item.name}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
        <CloseIcon
          className="navigation__mobile-close"
          onClick={handleClick}
          color={dark ? '#cecdcf' : '#5c5b62'}
        />
      </div>
    </>
  );
}
