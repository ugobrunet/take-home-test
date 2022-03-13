// eslint-disable-next-line no-unused-vars
import { BusinessRule, BreakException } from "./BusinessRule";

export class BusinessRulesPlan {
  /**
   * @constructor
   * @param {BusinessRule[]} rules
   */
  constructor(rules) {
    this.rules = rules;
  }

  execute() {
    try {
      this.rules.forEach(rule => rule.execute());
    } catch (e) {
      if (e !== BreakException) throw e;
    }
  }
}
