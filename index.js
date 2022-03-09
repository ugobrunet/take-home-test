import { DrugFactory } from "./src/components/Drug/factories/Drug.factory";
import { Pharmacy } from "./src/components/Pharmacy/models/Pharmacy";

import fs from "fs";

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

/* eslint-disable no-console */
fs.writeFile("output.txt", log.join(","), err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
