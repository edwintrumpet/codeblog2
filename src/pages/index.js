import React from 'react';
import {
  shape as _shape,
  arrayOf as _arrayOf,
  string as _string,
} from 'prop-types';
import { Link, graphql } from 'gatsby';
import Card from '../components/Card';
import '../styles/pages/home.css';

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
            }
            excerpt(truncate: false, pruneLength: 120)
          }
        }
      }
    }
  }
`;

export default function index({ data }) {
  const posts = [];

  data.allFile.edges.forEach((element) => {
    const item = element.node.childMarkdownRemark;
    if (item) posts.push(item);
  });

  return (
    <div className="home">
      {posts.map((element) => (
        <Link key={element.id} to={element.id}>
          <Card {...element} />
        </Link>
      ))}
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
