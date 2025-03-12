import { selectionSort } from "../selection-sort";

describe("Selection Sort", () => {
  it("should sort an unsorted array", () => {
    expect(selectionSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  });

  it("should handle empty arrays", () => {
    expect(selectionSort([])).toEqual([]);
  });

  it("should handle arrays with duplicate elements", () => {
    expect(selectionSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3])).toEqual([
      1, 1, 2, 3, 3, 4, 5, 5, 6, 9,
    ]);
  });

  it("should handle single element arrays", () => {
    expect(selectionSort([1])).toEqual([1]);
  });
});
