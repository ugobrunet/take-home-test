import { Drug } from "../Drug";

export class HerbalTea extends Drug {
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
   * @returns {string}
   */
  static get NAME() {
    return "Herbal Tea";
  }

  /**
   * Daily benefit variation
   * @returns {number}
   */
  get dailyBenefitVariation() {
    return this.isExpired ? 2 : 1;
  }
}
