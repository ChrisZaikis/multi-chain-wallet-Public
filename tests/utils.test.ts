import { test, expect } from "@playwright/test";
import { formatAddress } from "../src/utils";

test("formats address correctly", async () => {
  const address = "0x1234567890abcdef1234567890abcdef12345678";
  const formattedAddress = formatAddress(address);
  expect(formattedAddress).toBe("0x1234...5678");
});

test("returns empty string for undefined address", async () => {
  const formattedAddress = formatAddress(undefined);
  expect(formattedAddress).toBe("");
});

// TODO: Add more tests
