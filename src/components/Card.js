import React from 'react';
import { shape as _shape, string as _string } from 'prop-types';
import '../styles/components/Card.css';
import { dark } from '../utils/state';

export default function Card({
  frontmatter: {
    title,
    category,
    author,
    cover,
  },
  excerpt,
}) {
  let textContainerClass = 'card__text-container';
  let authorClass = 'card__author';
  let categoryClass = '';
  let titleClass;
  let resumeClass;

  if (dark) {
    textContainerClass += ' dark-background';
    authorClass += ' dark-high-contrast';
    categoryClass = 'card__image-container--dark';
    titleClass = 'dark-full-contrast';
    resumeClass = 'dark-high-contrast';
  } else {
    textContainerClass += ' light-background';
    authorClass += ' light-high-contrast';
    titleClass = 'light-full-contrast';
    resumeClass = 'light-high-contrast';
  }


  return (
    <div className="card">
      <div className="card__image-container">
        <img src={cover} alt={title} />
      </div>
      <div className={textContainerClass}>
        <span className={categoryClass}>{category}</span>
        <h1 className={titleClass}>{title}</h1>
        <p className={resumeClass}>{excerpt}</p>
        <div className="card__author-container">
          <div className="card__avatar-container" />
          <span className={authorClass}>{author}</span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  frontmatter: _shape({
    title: _string.isRequired,
    category: _string.isRequired,
    author: _string.isRequired,
    cover: _string.isRequired,
  }).isRequired,
  excerpt: _string.isRequired,
};
