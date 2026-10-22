// Задание 2 к Лекции 8. Спецификация — в README.md этой папки.
export function saveAll(storage, items) {
  for (const item of items) {
    storage.save(item);
  }

  return items.length;
}
