import { fetchUserById } from "./fetchUserById.js";

test("возвращает пользователя по существующему id", async () => {
  await expect(fetchUserById(1)).resolves.toEqual({
    id: 1,
    name: "Аня",
  });
});

test("отклоняет промис, если пользователь не найден", async () => {
  expect.assertions(1);

  await expect(fetchUserById(999)).rejects.toThrow(
    "Пользователь не найден"
  );
});

test.todo("fetchUserById: возвращает пользователя по id (resolves.toEqual)");
test.todo("fetchUserById: несуществующий id → отклонение (rejects.toThrow)");
