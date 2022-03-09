import { Drug } from "../models/Drug";
import { Dafalgan } from "../models/specifics/Dafalgan";
import { Fervex } from "../models/specifics/Fervex";
import { HerbalTea } from "../models/specifics/HerbalTea";
import { MagicPill } from "../models/specifics/MagicPill";

export class DrugFactory {
  /**
   * Create a drug instance
   * @param {string} name
   * @param {number} expiresIn
   * @param {number} benefit
   * @returns {Drug}
   */
  static create(name, expiresIn, benefit) {
    switch (name) {
      case HerbalTea.NAME:
        return new HerbalTea(name, expiresIn, benefit);
      case Fervex.NAME:
        return new Fervex(name, expiresIn, benefit);
      case MagicPill.NAME:
        return new MagicPill(name, expiresIn, benefit);
      case Dafalgan.NAME:
        return new Dafalgan(name, expiresIn, benefit);
      default:
        return new Drug(name, expiresIn, benefit);
    }
  }
}
