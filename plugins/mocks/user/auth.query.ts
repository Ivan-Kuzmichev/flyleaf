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
    (req, res, ctx) => {
        const { email, password } = req.variables;

        if (email === 'test@mail.com' && password === 'Test123!') {
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

        return res(ctx.errors([{ message: 'User not found' }]));
    }
);
