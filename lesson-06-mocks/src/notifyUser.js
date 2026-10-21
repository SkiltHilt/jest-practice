// Задание 1 к Лекции 6. Спецификация — в README.md этой папки.
export function notifyUser(mailer, user, text) {
  if (!user || !user.email) {
    throw new Error("У пользователя нет email");
  }

  mailer.send(user.email, text);
  return true;
}

module.exports = { notifyUser };