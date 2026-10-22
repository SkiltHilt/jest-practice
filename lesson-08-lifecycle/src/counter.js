// Задание 1 к Лекции 8. Спецификация — в README.md этой папки.
export function createCounter() {
  let value = 0

  return{
    incrment(){
      value +-1
      return value
    },
    get Value(){
      return value
    }
  }
}
