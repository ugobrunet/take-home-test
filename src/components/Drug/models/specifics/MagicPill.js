import { Drug } from "../Drug";

export class MagicPill extends Drug {
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
    return "Magic Pill";
  }

  /**
   * Daily benefit variation
   * @returns {number}
   */
  get dailyBenefitVariation() {
    return 0;
  }

  /**
   * Does drug expire
   * @returns {boolean}
   */
  get expires() {
    return false;
  }
}
