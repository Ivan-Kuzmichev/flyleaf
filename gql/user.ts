import gql from 'graphql-tag';

export const MUTATION_AUTH = gql`
    mutation auth($email: String!, $password: String!) {
        auth(userInput: { email: $email, password: $password }) {
            accessToken
            refreshToken
        }
    }
`;

export const QUERY_USER = gql`
    query {
        user {
            email
        }
    }
`;
