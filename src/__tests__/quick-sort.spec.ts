import { quickSort } from "../quick-sort";

describe("Quick Sort", () => {
  it("should sort an unsorted array", () => {
    expect(quickSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  });

  it("should handle empty arrays", () => {
    expect(quickSort([])).toEqual([]);
  });

  it("should handle arrays with all same elements", () => {
    expect(quickSort([4, 4, 4, 4, 4])).toEqual([4, 4, 4, 4, 4]);
  });

  it("should handle arrays with many duplicates", () => {
    expect(quickSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([
      1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9,
    ]);
  });
});
