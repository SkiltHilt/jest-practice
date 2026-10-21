import { getDiscount } from "./getDiscount.js";

test.each([
  [999, 0],
  [1000, 5],
  [1999, 5],
  [2000, 10],
  [4999, 10],
  [5000, 20],
  [6000, 20],
])("getDiscount(%i) возвращает %i", (total, expected) => {
  expect(getDiscount(total)).toBe(expected);
});

test.todo("getDiscount: ступени и точные границы через test.each");
