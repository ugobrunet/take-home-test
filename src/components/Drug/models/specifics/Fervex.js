import { Drug } from "../Drug";
import { RulesConfig } from "./Fervex.rules-config";

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

  get rulesConfig() {
    return RulesConfig;
  }

  /**
   * @returns {string}
   */
  static get NAME() {
    return "Fervex";
  }
}
