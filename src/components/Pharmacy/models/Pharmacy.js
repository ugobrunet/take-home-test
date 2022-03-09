// eslint-disable-next-line no-unused-vars
import { Drug } from "../../Drug/models/Drug";

export class Pharmacy {
  /**
   * @constructor
   * @param {Drug[]} drugs
   */
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  /**
   * Update benefit value of all drugs contained in pharmacy
   * @returns {Drug[]}
   */
  updateBenefitValue() {
    this.drugs.forEach(drug => drug.updatePropertiesAfterNewDay());

    return this.drugs;
  }
}
