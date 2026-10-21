import { isLeapYear } from "./isLeapYear";

test.each([
  [2024, true],
  [2023, false],
  [1900, false],
  [2000, true],
])("isLeapYear(%i) возвращает %s", (year, expected) => {
  expect(isLeapYear(year)).toBe(expected);
});