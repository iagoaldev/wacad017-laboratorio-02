import { describe, expect, it } from "vitest";
import { createMessage } from "../src/message.js";

describe("createMessage", () => {
  it("cria a mensagem padrão", () => {
    expect(createMessage()).toBe("Olá, Web Academy!");
  });

  it("aceita o nome de outro curso", () => {
    expect(createMessage("CI/CD")).toBe("Olá, CI/CD!");
  });
});
