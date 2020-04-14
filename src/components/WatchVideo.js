import React from 'react';
import { func as _func, string as _string } from 'prop-types';
import CloseIcon from '../assets/icons/CloseIcon';
import '../styles/components/WatchVideo.css';

export default function WatchVideo({ handleClose, videoId }) {
  return (
    <div className="watch-video">
      <div className="watch-video__container">
        <iframe
          className="watch-video__video"
          title="video"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="watch-video__close--desktop" onClick={handleClose}>
          <CloseIcon color="#fff" size={100} />
        </div>
        <div className="watch-video__close--movil" onClick={handleClose}>
          <CloseIcon color="#fff" size={50} />
        </div>
      </div>
    </div>
  );
}

WatchVideo.propTypes = {
  handleClose: _func.isRequired,
  videoId: _string.isRequired,
};
