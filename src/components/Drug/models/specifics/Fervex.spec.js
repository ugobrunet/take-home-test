import { Fervex } from "./Fervex";

describe("Fervex", () => {
  describe("updatePropertiesAfterNewDay", () => {
    it("should increase benefit value by 1 if expiration is in more than 10 days", () => {
      const fervex = new Fervex("Fervex", 20, 25);
      fervex.updatePropertiesAfterNewDay();

      expect(fervex.benefit).toBe(26);
    });

    it("should increase benefit value by 2 if expiration is in less than 10 days", () => {
      const fervex = new Fervex("Fervex", 10, 25);
      fervex.updatePropertiesAfterNewDay();

      expect(fervex.benefit).toBe(27);
    });

    it("should increase benefit value by 3 if expiration is in less than 5 days", () => {
      const fervex = new Fervex("Fervex", 5, 25);
      fervex.updatePropertiesAfterNewDay();

      expect(fervex.benefit).toBe(28);
    });

    it("should set benefit value to 0 if expired", () => {
      const fervex = new Fervex("Fervex", 0, 25);
      fervex.updatePropertiesAfterNewDay();

      expect(fervex.benefit).toBe(0);
    });
  });
});
