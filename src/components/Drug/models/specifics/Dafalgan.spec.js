import { Dafalgan } from "./Dafalgan";

describe("Dafalgan", () => {
  describe("updatePropertiesAfterNewDay", () => {
    it("should decrease benefit value by 2 if NOT expired", () => {
      const dafalgan = new Dafalgan("Dafalgan", 10, 25);
      dafalgan.updatePropertiesAfterNewDay();

      expect(dafalgan.benefit).toBe(23);
    });

    it("should decrease benefit value by 4 if expired", () => {
      const dafalgan = new Dafalgan("Dafalgan", 0, 25);
      dafalgan.updatePropertiesAfterNewDay();

      expect(dafalgan.benefit).toBe(21);
    });
  });
});
