import { Freight } from "./Freight";

export class FreightList {
  private constructor(readonly freightList: Freight[]) {}

  static create(freightList: Freight[]) {
    return new FreightList(freightList);
  }

  sortFreightList() {
    return this.freightList
      .sort((a: Freight, b: Freight) => {
        if (a.estimated_days < b.estimated_days) return -1;
        if (a.estimated_days > b.estimated_days) return 1;
        return 0;
      })
      .sort((a: Freight, b: Freight) => {
        if (a.cost < b.cost) return -1;
        if (a.cost > b.cost) return 1;
        return 0;
      });
  }
}
