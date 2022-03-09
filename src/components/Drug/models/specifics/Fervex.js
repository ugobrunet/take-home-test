import { Drug } from "../Drug";

export class Fervex extends Drug {
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
    return "Fervex";
  }

  /**
   * Daily benefit variation
   * @returns {number}
   */
  get dailyBenefitVariation() {
    if (this.isExpired) {
      return -this.benefit;
    } else {
      if (this.expiresIn < 6) {
        return 3;
      } else if (this.expiresIn < 11) {
        return 2;
      } else {
        return 1;
      }
    }
  }
}
