export class Drug {
  /**
   * @constructor
   * @param {string} name
   * @param {number} expiresIn
   * @param {number} benefit
   */
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  /**
   * Daily benefit variation
   * @returns {number}
   */
  get dailyBenefitVariation() {
    return this.isExpired ? -2 : -1;
  }

  /**
   * Does drug expire
   * @returns {boolean}
   */
  get expires() {
    return true;
  }

  /**
   * Is drug expired
   * @returns {boolean}
   */
  get isExpired() {
    return this.expiresIn < 0;
  }

  /**
   * Update drug properties after a new day has passed
   * @returns {Drug}
   */
  updatePropertiesAfterNewDay() {
    return this.updateExpiresIn().updateBenefitValue();
  }

  /**
   * Update drug expiresIn property
   * @returns {Drug}
   */
  updateExpiresIn() {
    if (this.expires) this.expiresIn--;
    return this;
  }

  /**
   * Update drug benefit property
   * @returns {Drug}
   */
  updateBenefitValue() {
    this.benefit += this.dailyBenefitVariation;
    return this.checkBenefitBoundariesRules();
  }

  /**
   * Check that benefit value respects boundaries rules
   * @returns {Drug}
   */
  checkBenefitBoundariesRules() {
    if (this.benefit < 0) {
      this.benefit = 0;
    }
    if (this.benefit > 50) {
      this.benefit = 50;
    }
    return this;
  }
}
