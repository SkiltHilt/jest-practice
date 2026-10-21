import { getUserName } from "./getUserName.js";

test("возвращает имя найденного пользователя", () => {
  const repo = {
    findById: jest.fn().mockReturnValue({ id: 1, name: "Аня" }),
  };
  const result = getUserName(repo, 1);
  expect(result).toBe("Аня");
  expect(repo.findById).toHaveBeenCalledWith(1);
});

test("возвращает «Аноним», если пользователь не найден", () => {
  const repo = {
    findById: jest.fn().mockReturnValue(undefined),
  };
  const result = getUserName(repo, 999);
  expect(result).toBe("Аноним");
});

test("возвращает «Аноним», если у найденного пользователя нет имени", () => {
  const repo = {
    findById: jest.fn().mockReturnValue({}),
  };
  const result = getUserName(repo, 1);
  expect(result).toBe("Аноним");
});

test.todo("getUserName: возвращает имя найденного пользователя (mockReturnValue)");
test.todo("getUserName: не найден → «Аноним»");
