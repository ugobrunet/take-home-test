import { Drug } from "../Drug";
import { RulesConfig } from "./HerbalTea.rules-config";

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

  get rulesConfig() {
    return RulesConfig;
  }

  /**
   * @returns {string}
   */
  static get NAME() {
    return "Herbal Tea";
  }
}
