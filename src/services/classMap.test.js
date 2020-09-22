import React from "react";

import classMap from "./classMap";

describe("classMap", () => {
  it("returns classes", () => {
    expect(classMap({ 1: true, 2: true })).toBe("1 2");
  });

  it("returns classes", () => {
    expect(classMap({ 1: false, 2: true })).toBe("2");
  });

  it("returns classe", () => {
    expect(classMap({ 1: true })).toBe("1");
  });
});
