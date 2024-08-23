import { Freight } from "../../src/domain/entities/Freight";

describe("Freight", () => {
  test("Deve criar uma nova instância de Freight com parâmetros válidos", () => {
    const name = "Test Freight";
    const type = "Test Type";
    const cost = 100;
    const estimated_days = 5;

    const freight = Freight.create(name, type, cost, estimated_days);

    expect(freight.name).toBe(name);
    expect(freight.type).toBe(type);
    expect(freight.cost).toBe(cost);
    expect(freight.estimated_days).toBe(estimated_days);
  });

  test("Deve lançar um erro se o nome não for uma string com letras", () => {
    const name = "123";
    const type = "Test Type";
    const cost = 100;
    const estimated_days = 5;

    expect(() => Freight.create(name, type, cost, estimated_days)).toThrowError(
      "Invalid name"
    );
  });

  test("Deve lançar um erro se o tipo não for uma string com letras", () => {
    const name = "Test Freight";
    const type = "123";
    const cost = 100;
    const estimated_days = 5;

    expect(() => Freight.create(name, type, cost, estimated_days)).toThrowError(
      "Invalid type"
    );
  });

  test("Deve lançar um erro se o custo não for um número positivo", () => {
    const name = "Test Freight";
    const type = "Test Type";
    const cost = 0;
    const estimated_days = 5;

    expect(() => Freight.create(name, type, cost, estimated_days)).toThrowError(
      "Invalid cost"
    );
  });

  test("Deve lançar um erro se o número estimado de dias não for um número positivo", () => {
    const name = "Test Freight";
    const type = "Test Type";
    const cost = 100;
    const estimated_days = 0;

    expect(() => Freight.create(name, type, cost, estimated_days)).toThrowError(
      "Invalid estimated days"
    );
  });
});
