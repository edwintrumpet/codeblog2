/* eslint-disable react/no-danger */
import React from 'react';
import { string as _string, shape as _shape } from 'prop-types';
import '../styles/components/Post.css';

export default function Post({ html, frontmatter: { title } }) {
  return (
    <div className="post">
      <h1>{title}</h1>
      <div className="post__inner" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

Post.propTypes = {
  html: _string.isRequired,
  frontmatter: _shape({
    title: _string.isRequired,
  }).isRequired,
};
