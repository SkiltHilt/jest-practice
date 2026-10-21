import { divideAsync } from "./divideAsync.js";

test("делит числа", async () => {
  await expect(divideAsync(10, 2)).resolves.toBe(5);
});

test("отклоняет промис при делении на ноль", async () => {
  await expect(divideAsync(10, 0)).rejects.toThrow("Деление на ноль");
});

test.todo("divideAsync: делит два числа (resolves / await)");
test.todo("divideAsync: деление на ноль → промис отклоняется (rejects)");
