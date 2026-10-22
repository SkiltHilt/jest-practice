import { convertToRub } from "./convert.js";
import { getRate } from "./currency.js";

jest.mock("./currency.js");

beforeEach(() => {
  getRate.mockReset();
});

test("переводит сумму в рубли по курсу валюты", () => {
  getRate.mockReturnValue(90);

  const result = convertToRub(2, "USD");

  expect(result).toBe(180);
  expect(getRate).toHaveBeenCalledWith("USD");
});

test("пробрасывает ошибку получения курса", () => {
  getRate.mockImplementation(() => {
    throw new Error("нет связи");
  });

  expect(() => convertToRub(2, "USD")).toThrow("нет связи");
});

test.todo("convertToRub: переводит сумму по курсу из модуля (jest.mock)");
