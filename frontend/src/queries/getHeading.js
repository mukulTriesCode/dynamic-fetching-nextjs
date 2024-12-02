import { gql } from "@apollo/client";

export const getHeading = gql`
  query Heading {
    heading {
      Title
    }
  }
`;
