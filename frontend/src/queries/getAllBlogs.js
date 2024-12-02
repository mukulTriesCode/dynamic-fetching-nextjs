import { gql } from "@apollo/client";

export const getAllBlogs = gql`
  query Blogs {
    blogs {
      documentId
      blog_title
      slug
    }
  }
`;
