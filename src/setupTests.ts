// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { serverWorker } from './mock/browser';

beforeAll(() => {
    serverWorker.start({
        onUnhandledRequest: 'error'
    });
});
afterAll(() => {
    serverWorker.stop();
});
afterEach(() => {
    serverWorker.resetHandlers();
});
