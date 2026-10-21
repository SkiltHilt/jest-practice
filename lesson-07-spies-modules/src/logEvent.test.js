import { logEvent } from "./logEvent.js";

test("логирует событие и возвращает true", () => {
  const spy = jest.spyOn(console, "log").mockImplementation(() => {});

  try {
    const result = logEvent("click");

    expect(result).toBe(true);
    expect(spy).toHaveBeenCalledWith("Событие: click");
  } finally {
    spy.mockRestore();
  }
});

test.todo("logEvent: вызывает console.log с нужным текстом (jest.spyOn)");
