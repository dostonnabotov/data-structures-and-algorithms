import Stack from "../../data-structures/Stack";
import { describe, expect, it } from "vitest";

describe("#stack", () => {
  const stack = new Stack();

  it("adds new element(s)", () => {
    expect(stack.add(3)).toStrictEqual([3]);
    expect(stack.add(4, 5)).toStrictEqual([3, 4, 5]);
  });

  it("removes the last element", () => {
    expect(stack.remove()).toStrictEqual([3, 4]);
  });

  it("views the last element", () => {
    expect(stack.peek()).toBe(4);
  });

  it("checks if the stack is empty", () => {
    expect(stack.isEmpty()).toBe(false);
  });

  it("clears all the elements", () => {
    expect(stack.clear()).toStrictEqual([]);
  });
});
