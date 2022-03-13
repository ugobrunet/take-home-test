import { DrugFactory } from "../../src/components/Drug/factories/Drug.factory";
import { Pharmacy } from "../../src/components/Pharmacy/models/Pharmacy";
import { benefitValues } from "./resources/benefit-values";

const expectedOutput = benefitValues.map(el => JSON.stringify(el));

describe("E2E test for Pharmacy", () => {
  it("should match expected result", () => {
    const drugs = [
      DrugFactory.create("Doliprane", 20, 30),
      DrugFactory.create("Herbal Tea", 10, 5),
      DrugFactory.create("Fervex", 5, 40),
      DrugFactory.create("Magic Pill", 15, 40)
    ];
    const trial = new Pharmacy(drugs);

    const log = [];

    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
      log.push(JSON.stringify(trial.updateBenefitValue()));
    }

    expect(log).toEqual(expectedOutput);
  });
});
