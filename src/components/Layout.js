import React from 'react';
import { element as _element } from 'prop-types';
import Header from './Header';
import '../styles/index.css';
import { dark } from '../utils/state';

export default function Layout({ children }) {
  let layoutClass = 'layout';

  if (dark) layoutClass += ' dark-background';
  else layoutClass += ' light-background';

  return (
    <div className={layoutClass}>
      <Header />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: _element,
};

Layout.defaultProps = {
  children: null,
};
