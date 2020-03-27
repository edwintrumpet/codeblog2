import React from 'react';
import { shape as _shape } from 'prop-types';
import Post from '../components/Post';

export default function PostTemplate({ pageContext }) {
  return <Post {...pageContext} />;
}

PostTemplate.propTypes = {
  pageContext: _shape({}).isRequired,
};
