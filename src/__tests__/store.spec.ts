import { removeCell, FlexGridCellConfig } from "../store";

describe("removeCell removes cell at", () => {
  const cells: FlexGridCellConfig[] = [
    { columns: { desktop: 5, tablet: 4, phone: 3 } },
    { columns: { desktop: 4, tablet: 3, phone: 2 } },
    { columns: { desktop: 3, tablet: 2, phone: 1 } },
    { columns: { desktop: 2, tablet: 1, phone: 1 } }
  ];

  test("index 0", () => {
    expect(removeCell(cells, 0)).toEqual([
      { columns: { desktop: 4, tablet: 3, phone: 2 } },
      { columns: { desktop: 3, tablet: 2, phone: 1 } },
      { columns: { desktop: 2, tablet: 1, phone: 1 } }
    ]);
  });
  test("index 1", () => {
    expect(removeCell(cells, 1)).toEqual([
      { columns: { desktop: 5, tablet: 4, phone: 3 } },
      { columns: { desktop: 3, tablet: 2, phone: 1 } },
      { columns: { desktop: 2, tablet: 1, phone: 1 } }
    ]);
  });
  test("index 3", () => {
    expect(removeCell(cells, 3)).toEqual([
      { columns: { desktop: 5, tablet: 4, phone: 3 } },
      { columns: { desktop: 4, tablet: 3, phone: 2 } },
      { columns: { desktop: 3, tablet: 2, phone: 1 } }
    ]);
  });
});
