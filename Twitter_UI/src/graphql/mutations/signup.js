import { gql } from "react-apollo";

export default gql`
  mutation signup(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $username: String!
    $avatar: String
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      username: $username
      avatar: $avatar
    ) {
      token
    }
  }
`;
