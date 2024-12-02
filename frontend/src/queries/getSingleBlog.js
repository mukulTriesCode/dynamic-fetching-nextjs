import { gql } from "@apollo/client";

const getSingleBlog = gql`
  query Blog($documentId: ID!) {
    blog(documentId: $documentId) {
      blog_title
      documentId
      blog_description
      blog_image {
        url
        alternativeText
      }
      slug
    }
  }
`;
