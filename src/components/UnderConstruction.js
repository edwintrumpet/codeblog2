import React from 'react';
import { string as _string } from 'prop-types';
import '../styles/components/UnderConstruction.css';

export default function UnderConstruction({ site }) {
  return (
    <div className="under-construction">
      <h1>
        {site}
        {' '}
        se encuentra en construcción
      </h1>
    </div>
  );
}

UnderConstruction.propTypes = {
  site: _string,
};

UnderConstruction.defaultProps = {
  site: 'Site',
};
