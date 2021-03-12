import { setupWorker, graphql } from "msw";
import { setupServer } from "msw/node";

export default function () {
    const handlers = [
        graphql.query('GetUserInfo', (req, res, ctx) => {
            return res(
                ctx.data({
                    user: {
                        username: 'dddd',
                        firstName: 'John',
                    },
                }),
            )
        }),
    ]

    if (typeof window === 'undefined') {
        setupServer(...handlers).listen();
    } else {
        setupWorker(...handlers).start();
    }
}
