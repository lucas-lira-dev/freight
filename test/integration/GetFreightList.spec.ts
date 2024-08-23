import { GetFreightList } from "../../src/app/usecase/GetFreightList";

describe("GetFreightList UseCase", () => {
  test("Deve ordenar fretes com custos iguais por data de entrega", async () => {
    const freightList = new GetFreightList();
    const result = await freightList.execute([
      { name: "Option 1", type: "Delivery", cost: 10, estimated_days: 3 },
      { name: "Option 2", type: "Custom", cost: 10, estimated_days: 3 },
      { name: "Option 3", type: "Pickup", cost: 10, estimated_days: 3 },
    ]);
    expect(result).toStrictEqual([
      { name: "Option 1", type: "Delivery", cost: 10, estimated_days: 3 },
      { name: "Option 2", type: "Custom", cost: 10, estimated_days: 3 },
      { name: "Option 3", type: "Pickup", cost: 10, estimated_days: 3 },
    ]);
  });

  test("Deve ordenar fretes por data de entrega", async () => {
    const freightList = new GetFreightList();
    const result = await freightList.execute([
      { name: "Option 1", type: "Delivery", cost: 10, estimated_days: 5 },
      { name: "Option 2", type: "Custom", cost: 10, estimated_days: 2 },
      { name: "Option 3", type: "Pickup", cost: 10, estimated_days: 3 },
    ]);
    expect(result).toStrictEqual([
      { name: "Option 2", type: "Custom", cost: 10, estimated_days: 2 },
      { name: "Option 3", type: "Pickup", cost: 10, estimated_days: 3 },
      { name: "Option 1", type: "Delivery", cost: 10, estimated_days: 5 },
    ]);
  });

  test("Deve ordenar fretes por custo", async () => {
    const freightList = new GetFreightList();
    const result = await freightList.execute([
      { name: "Option 1", type: "Delivery", cost: 6, estimated_days: 3 },
      { name: "Option 2", type: "Custom", cost: 5, estimated_days: 3 },
      { name: "Option 3", type: "Pickup", cost: 10, estimated_days: 3 },
    ]);
    expect(result).toStrictEqual([
      { name: "Option 2", type: "Custom", cost: 5, estimated_days: 3 },
      { name: "Option 1", type: "Delivery", cost: 6, estimated_days: 3 },
      { name: "Option 3", type: "Pickup", cost: 10, estimated_days: 3 },
    ]);
  });

  test("Deve ordenar fretes por custo e data de entrega", async () => {
    const freightList = new GetFreightList();
    const result = await freightList.execute([
      { name: "Option 4", type: "Delivery", cost: 10, estimated_days: 3 },
      { name: "Option 1", type: "Delivery", cost: 10, estimated_days: 5 },
      { name: "Option 2", type: "Custom", cost: 5, estimated_days: 4 },
      { name: "Option 3", type: "Pickup", cost: 7, estimated_days: 1 },
    ]);
    expect(result).toStrictEqual([
      { name: "Option 2", type: "Custom", cost: 5, estimated_days: 4 },
      { name: "Option 3", type: "Pickup", cost: 7, estimated_days: 1 },
      { name: "Option 4", type: "Delivery", cost: 10, estimated_days: 3 },
      { name: "Option 1", type: "Delivery", cost: 10, estimated_days: 5 },
    ]);
  });

  test("Deve retornar lista vazia quando não há frete", async () => {
    const freightList = new GetFreightList();
    const result = await freightList.execute([]);
    expect(result).toStrictEqual([]);
  });
});
