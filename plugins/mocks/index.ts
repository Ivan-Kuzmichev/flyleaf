import { setupWorker } from 'msw';
import { setupServer } from 'msw/node';
import { auth } from '~/plugins/mocks/user/auth.query';

export default function () {
    const handlers = [auth];

    if (typeof window === 'undefined') {
        setupServer(...handlers).listen();
    } else {
        setupWorker(...handlers).start();
    }
}
