import { Drug } from "../Drug";
import { RulesConfig } from "./MagicPill.rules-config";

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

  get rulesConfig() {
    return RulesConfig;
  }

  /**
   * @returns {string}
   */
  static get NAME() {
    return "Magic Pill";
  }

  /**
   * Does drug expire
   * @returns {boolean}
   */
  get expires() {
    return false;
  }
}
