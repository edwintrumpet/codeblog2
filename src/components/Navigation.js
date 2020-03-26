/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import MenuIcon from '../assets/icons/MenuIcon';
import CloseIcon from '../assets/icons/CloseIcon';
import '../styles/components/Navigation.css';

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const dark = false;

  const menuItems = [
    'Inicio',
    'Portafolio',
    'Sobre mí',
    'Contacto',
  ];

  let navigationMobileClass = 'navigation__mobile';
  if (showMenu) navigationMobileClass += ' navigation__mobile--open';
  if (dark) navigationMobileClass += ' dark-background dark-full-contrast';
  else navigationMobileClass += ' light-background light-full-contrast';

  const handleClick = () => setShowMenu(!showMenu);

  return (
    <>
      <div className="navigation__desktop">
        <ul>
          {menuItems.map((item) => <li key={item}>{item}</li>)}
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
          {menuItems.map((item) => <li key={item}>{item}</li>)}
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
