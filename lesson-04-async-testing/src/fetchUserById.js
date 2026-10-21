const USERS = [
  { id: 1, name: "Аня" },
  { id: 2, name: "Борис" },
];

export async function fetchUserById(id) {
  const user = USERS.find((item) => item.id === id);

  if (!user) {
    throw new Error("Пользователь не найден");
  }

  return user;
}

module.exports = { fetchUserById };