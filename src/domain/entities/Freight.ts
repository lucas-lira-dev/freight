export class Freight {
  private constructor(
    readonly name: string,
    readonly type: string,
    readonly cost: number,
    readonly estimated_days: number
  ) {
    if (!this.name.match(/[a-zA-Z]+/)) throw new Error("Invalid name");
    if (!this.type.match(/[a-zA-Z]+/)) throw new Error("Invalid type");
    if (this.cost <= 0) throw new Error("Invalid cost");
    if (this.estimated_days <= 0) throw new Error("Invalid estimated days");
  }

  static create(
    name: string,
    type: string,
    cost: number,
    estimated_days: number
  ) {
    return new Freight(name, type, cost, estimated_days);
  }
}
