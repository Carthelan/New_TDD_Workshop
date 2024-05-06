// Don't forget to import your functions

import { Determine } from "./Drivers";

describe("Drivers", () => {
  test("returns driver status enum value", () => {
    expect(Determine(10)).toBeDefined()
  });
  test("Returns too young if age is less than 16", () => {
    expect(Determine(15)).toMatch('too young')
  });
  test("Returns too old if age is greater than 85", () => {
    expect(Determine(90)).toMatch('too old')
  });
  test("Returns eligible if between 16 and 85", () => {
    expect(Determine(50)).toMatch('eligible')
  });
});
