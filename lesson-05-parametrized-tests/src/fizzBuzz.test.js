import { fizzBuzz } from "./fizzBuzz.js";

test.each([
  { n: 3, expected: "Fizz" },
  { n: 5, expected: "Buzz" },
  { n: 15, expected: "FizzBuzz" },
  { n: 1, expected: "1" },
])("fizzBuzz($n) возвращает $expected", ({ n, expected }) => {
  expect(fizzBuzz(n)).toBe(expected);
});

test.todo("fizzBuzz: 4 ветки через test.each");
