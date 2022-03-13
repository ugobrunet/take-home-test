import { MagicPill } from "./MagicPill";

describe("MagicPill", () => {
  describe("updatePropertiesAfterNewDay", () => {
    it("should NOT change benefit value", () => {
      const magicPill = new MagicPill("MagicPill", 10, 25);
      magicPill.updatePropertiesAfterNewDay();

      expect(magicPill.benefit).toBe(25);
    });

    it("should NOT expire", () => {
      const magicPill = new MagicPill("MagicPill", 10, 25);
      magicPill.updatePropertiesAfterNewDay();

      expect(magicPill.expiresIn).toBe(10);
    });
  });
});
