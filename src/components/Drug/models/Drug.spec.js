import { Drug } from "./Drug";

describe("Drug", () => {
  describe("updatePropertiesAfterNewDay", () => {
    it("should decrease benefit value by 1 if NOT expired", () => {
      const drug = new Drug("Drug", 10, 25);
      drug.updatePropertiesAfterNewDay();

      expect(drug.benefit).toBe(24);
    });

    it("should decrease benefit value by 2 if expired", () => {
      const drug = new Drug("Drug", 0, 25);
      drug.updatePropertiesAfterNewDay();

      expect(drug.benefit).toBe(23);
    });

    it("should decrease expiredIn", () => {
      const drug = new Drug("Drug", 10, 25);
      drug.updatePropertiesAfterNewDay();

      expect(drug.expiresIn).toBe(9);
    });

    it("should not have a benefit lower than 0", () => {
      const drug = new Drug("Drug", 0, 1);
      drug.updatePropertiesAfterNewDay();
      expect(drug.benefit).toBe(0);
      drug.updatePropertiesAfterNewDay();
      expect(drug.benefit).toBe(0);
    });

    it("should not have a benefit greater than 50", () => {
      const drug = new Drug("Drug", 0, 100);
      drug.updatePropertiesAfterNewDay();
      expect(drug.benefit).toBe(50);
    });
  });
});
