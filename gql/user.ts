import gql from 'graphql-tag';

export const MUTATION_AUTH = gql`
    mutation($email: String!, $password: String!) {
        auth(userInput: { email: $email, password: $password }) {
            access_token
            refresh_token
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
