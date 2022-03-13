export const BreakException = new Error("BreakException");

export class BusinessRule {
  constructor({ condition = () => true, cb }) {
    this.condition = condition;
    this.cb = cb;
  }

  execute() {
    if (this.condition()) {
      this.cb();
      throw BreakException;
    }
  }
}
