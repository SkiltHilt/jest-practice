import { saveAll } from "./saveAll.js";

const save = jest.fn();

const storage = { save };

beforeEach(() => {
  save.mockClear();
});

test('один элемент — save вызван 1 раз', () => {
  const result = saveAll(storage, ['apple']);

  expect(save).toHaveBeenCalledTimes(1);
  expect(result).toBe(1);
});

test('два элемента — save вызван 2 раза', () => {
  const result = saveAll(storage, ['apple', 'banana']);

  expect(save).toHaveBeenCalledTimes(2);
  expect(result).toBe(2);
});

test.todo("saveAll: сброс мока между тестами (beforeEach + mockClear)");
