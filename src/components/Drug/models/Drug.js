import { BusinessRule } from "../../../utils/BusinessRule/BusinessRule";
import { BusinessRulesPlan } from "../../../utils/BusinessRule/BusinessRulesPlan";
import { RulesConfig } from "./Drug.rules-config";

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
   * @typedef {{expired?:boolean, expiresIn?:number, update?:number, set?:number}} RulesConfig
   * @type {RulesConfig[]}
   */
  get rulesConfig() {
    return RulesConfig;
  }

  /**
   * @returns {BusinessRulesPlan}
   */
  get businessRules() {
    return new BusinessRulesPlan(
      this.rulesConfig.map(
        config =>
          new BusinessRule({
            condition: () => {
              if (config.expired === true) {
                return this.isExpired;
              }
              if (config.expiresIn) {
                return this.expiresIn <= config.expiresIn;
              }
              return true;
            },
            cb: () => {
              if (config.update != null) {
                this.updateBenefitValue(config.update);
              }
              if (config.set != null) {
                this.setBenefitValue(config.set);
              }
            }
          })
      )
    );
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
   * @returns {void}
   */
  updatePropertiesAfterNewDay() {
    this.updateExpiresIn();
    this.businessRules.execute();
  }

  /**
   * Update drug expiresIn property
   * @returns {Drug}
   */
  updateExpiresIn() {
    if (this.expires) this.expiresIn--;
    return this;
  }

  setBenefitValue(value) {
    this.benefit = value;
    return this.checkBenefitBoundariesRules();
  }

  /**
   * Update drug benefit property
   * @returns {Drug}
   */
  updateBenefitValue(variation) {
    this.benefit += variation;
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
