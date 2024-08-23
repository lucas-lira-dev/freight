import { FreightList } from "../../domain/entities/FreightList";

export class GetFreightList {
  async execute(input: Input[]): Promise<Output[]> {
    const freightList = FreightList.create(input);
    return freightList.sortFreightList();
  }
}

type Input = {
  name: string;
  type: string;
  cost: number;
  estimated_days: number;
};

type Output = {
  name: string;
  type: string;
  cost: number;
  estimated_days: number;
};
