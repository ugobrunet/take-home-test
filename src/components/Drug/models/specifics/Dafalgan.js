import { Drug } from "../Drug";

export class Dafalgan extends Drug {
  /**
   * @constructor
   * @param {string} name
   * @param {number} expiresIn
   * @param {number} benefit
   */
  constructor(name, expiresIn, benefit) {
    super(name, expiresIn, benefit);
  }

  /**
   * @requires {string}
   */
  static get NAME() {
    return "Dafalgan";
  }

  /**
   * Daily benefit variation
   * @returns {number}
   */
  get dailyBenefitVariation() {
    return this.isExpired ? -4 : -2;
  }
}
