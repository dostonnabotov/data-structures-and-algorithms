import isPalindrome from "../../algorithms/isPalindrome";
import { describe, expect, it } from "vitest";

describe("#isPalindrome", () => {
  it("checks if a string is a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
  });
});