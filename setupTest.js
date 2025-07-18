import '@testing-library/jest-dom';



const MESSAGES_TO_IGNORE = [
"When testing, code that causes React state updates should be wrapped into >act(...):",
"Error:",
"The above error occurred"
];

const originalError = console.error.bind(console.error);

console.error = (...args) => {
const ignoreMessage = MESSAGES_TO_IGNORE.find(message => args.toString().includes(message));
if (!ignoreMessage) originalError(...args);
}

jest.setTimeout(30000);

if (typeof window !== 'undefined') {
  const { ResizeObserver } = window;

beforeEach(() => {
  //@ts-ignore
  delete window.ResizeObserver;
  window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});

afterEach(() => {
  window.ResizeObserver = ResizeObserver;
  jest.restoreAllMocks();
})};