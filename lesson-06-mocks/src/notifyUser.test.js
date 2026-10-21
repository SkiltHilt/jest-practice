import { notifyUser } from "./notifyUser.js";

test("отправляет уведомление на email пользователя", () => {
  // Arrange
  const mailer = { send: jest.fn() };
  const user = { email: "anya@example.com" };
  const text = "Привет!";

  // Act
  const result = notifyUser(mailer, user, text);

  // Assert
  expect(result).toBe(true);
  expect(mailer.send).toHaveBeenCalledTimes(1);
  expect(mailer.send).toHaveBeenCalledWith("anya@example.com", "Привет!");
});

test("не отправляет уведомление, если у пользователя нет email", () => {
  // Arrange
  const mailer = { send: jest.fn() };
  const user = {};

  // Act
  const action = () => notifyUser(mailer, user, "Привет!");

  // Assert
  expect(action).toThrow("У пользователя нет email");
  expect(mailer.send).not.toHaveBeenCalled();
});
test.todo("notifyUser: вызывает mailer.send с нужными аргументами (AAA)");
test.todo("notifyUser: без email — ошибка, mailer.send не вызывается");
