import { createCounter } from "./counter.js";

describe('createCounter', () => {
  let counter;

  beforeEach(() => {
    counter = createCounter();
  });

  test('после одного increment() value равно 1', () => {
    counter.increment();

    expect(counter.value).toBe(1);
  });

  test('после двух increment() value равно 2', () => {
    counter.increment();
    counter.increment();

    expect(counter.value).toBe(2);
  });
});

test.todo("createCounter: свежее состояние через beforeEach, два независимых теста");
