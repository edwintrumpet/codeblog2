import React, { useState } from 'react';
import {
  shape as _shape,
  arrayOf as _arrayOf,
  string as _string,
} from 'prop-types';
import { Link, graphql } from 'gatsby';
import Card from '../components/Card';
import '../styles/pages/home.css';
import WatchVideo from '../components/WatchVideo';

export const query = graphql`
  query GET_POSTS{
    allFile {
      edges {
        node {
          childMarkdownRemark {
            id
            frontmatter {
              title
              category
              cover
              author
              type
              url
            }
            excerpt(truncate: false, pruneLength: 120)
          }
        }
      }
    }
  }
`;

export default function index({ data }) {
  const [showVideo, setShowVideo] = useState(false);
  const [videoId, setVideoId] = useState('');
  const posts = [];

  data.allFile.edges.forEach((element) => {
    const item = element.node.childMarkdownRemark;
    if (item) posts.push(item);
  });

  const handleOpenVideo = (element) => {
    setVideoId(element.frontmatter.url);
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="home">
      {posts.map((element) => {
        if (element.frontmatter.type === 'video') {
          return (
            <div
              role="button"
              key={element.id}
              onClick={() => handleOpenVideo(element)}
            >
              <Card {...element} />
            </div>
          );
        }
        return (
          <Link key={element.id} to={element.id}>
            <Card {...element} />
          </Link>
        );
      })}
      {showVideo && <WatchVideo handleClose={handleCloseVideo} videoId={videoId} />}
    </div>
  );
}

index.propTypes = {
  data: _shape({
    allFile: _shape({
      edges: _arrayOf({
        node: _shape({
          relativeDirectory: _string.isRequired,
          childMarkdownRemark: _shape,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
