import { Drug } from "../Drug";
import { RulesConfig } from "./Dafalgan.rules-config";

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

  get rulesConfig() {
    return RulesConfig;
  }

  /**
   * @requires {string}
   */
  static get NAME() {
    return "Dafalgan";
  }
}
