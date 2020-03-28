import React from 'react';
import { Link } from 'gatsby';
import Logo from '../assets/icons/Logo';
import Navigation from './Navigation';
import '../styles/components/Header.css';

export default function Header() {
  // Import this from metadata
  const title = 'Edwin García';
  const subtitle = 'Software developer';

  return (
    <div className="header">
      <Link to="/">
        <div className="header__brand">
          <Logo size={80} className="header__brand__logo--desktop" />
          <Logo className="header__brand__logo--mobile" />
          <div className="header__brand__text">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </div>
        </div>
      </Link>
      <Navigation />
    </div>
  );
}
