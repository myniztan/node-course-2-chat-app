const expect = require("expect");

const {isRealString} = require("./validation.js");

describe("isRealString", () => {
  it("should reject non-string values", () => {
    expect(isRealString(4)).toBe(false);
  });

  it("should reject strings with only spaces", () => {
    expect(isRealString("  ")).toBe(false);
  });

  it("should allow string with non space characters", () => {
    expect(isRealString("Test Name")).toBe(true);
  });
});