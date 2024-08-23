import { FreightList } from "../../src/domain/entities/FreightList";

describe("FreightList", () => {
  test("Deve criar uma nova instância com uma lista de itens de frete", () => {
    const freightList = [
      { name: "Option 1", type: "Delivery", cost: 10, estimated_days: 3 },
      { name: "Option 2", type: "Custom", cost: 10, estimated_days: 3 },
      { name: "Option 3", type: "Pickup", cost: 10, estimated_days: 3 },
    ];
    const freightListInstance = FreightList.create(freightList);
    expect(freightListInstance).toBeInstanceOf(FreightList);
    expect(freightListInstance.sortFreightList()).toEqual(freightList);
  });

  test("Deve ordena a lista de itens de frete por dias estimados e custo", () => {
    const freightList = [
      { name: "Option 1", type: "Delivery", cost: 50, estimated_days: 1 },
      { name: "Option 3", type: "Pickup", cost: 150, estimated_days: 3 },
      { name: "Option 2", type: "Custom", cost: 100, estimated_days: 3 },
      { name: "Option 4", type: "Delivery", cost: 200, estimated_days: 5 },
    ];
    const freightListInstance = FreightList.create(freightList);
    const sortedFreightList = freightListInstance.sortFreightList();
    expect(sortedFreightList).toEqual([
      { name: "Option 1", type: "Delivery", cost: 50, estimated_days: 1 },
      { name: "Option 2", type: "Custom", cost: 100, estimated_days: 3 },
      { name: "Option 3", type: "Pickup", cost: 150, estimated_days: 3 },
      { name: "Option 4", type: "Delivery", cost: 200, estimated_days: 5 },
    ]);
  });

  test("Deve retorna a lista original se ela já estiver ordenada", () => {
    const freightList = [
      { name: "Option 1", type: "Delivery", cost: 10, estimated_days: 3 },
      { name: "Option 2", type: "Custom", cost: 10, estimated_days: 3 },
      { name: "Option 3", type: "Pickup", cost: 10, estimated_days: 3 },
    ];
    const freightListInstance = FreightList.create(freightList);
    const sortedFreightList = freightListInstance.sortFreightList();
    expect(sortedFreightList).toEqual(freightList);
  });
});
