import { graphql } from 'msw';

interface LoginMutation {
    auth: {
        accessToken: string;
        refreshToken: string;
        __typename?: any;
    };
}

interface LoginMutationVariables {
    email: string;
    password: string;
}

export const auth = graphql.mutation<LoginMutation, LoginMutationVariables>(
    'auth',
    (_req, res, ctx) => {
        // const { username, password } = req.variables;

        return res(
            ctx.data({
                auth: {
                    accessToken: '123',
                    refreshToken: '456',
                    __typename: 'test',
                },
            })
        );
    }
);
