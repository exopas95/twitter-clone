import { gql } from "react-apollo";

export default gql`
  subscription {
    tweetAdded {
      text
      _id
      cratedAt
      favoriteCount
      user {
        username
        avatar
        firstName
        lastName
      }
    }
  }
`;
