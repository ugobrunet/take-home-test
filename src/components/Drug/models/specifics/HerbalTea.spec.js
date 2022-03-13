import { HerbalTea } from "./HerbalTea";

describe("HerbalTea", () => {
  describe("updatePropertiesAfterNewDay", () => {
    it("should increase benefit value by 1 if NOT expired", () => {
      const herbalTea = new HerbalTea("HerbalTea", 10, 25);
      herbalTea.updatePropertiesAfterNewDay();

      expect(herbalTea.benefit).toBe(26);
    });

    it("should increase benefit value by 2 if expired", () => {
      const herbalTea = new HerbalTea("HerbalTea", 0, 25);
      herbalTea.updatePropertiesAfterNewDay();

      expect(herbalTea.benefit).toBe(27);
    });
  });
});
