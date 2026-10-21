// Задание 2 к Лекции 6. Спецификация — в README.md этой папки.
export function getUserName(repo, id) {
  const user = repo.findById(id);

  return user?.name ?? "Аноним";
}

module.exports = { getUserName };
