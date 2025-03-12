import { countingSort } from "../counting-sort";

describe("Counting Sort", () => {
  it("should sort an array of positive integers", () => {
    expect(countingSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  });

  it("should handle empty arrays", () => {
    expect(countingSort([])).toEqual([]);
  });

  it("should handle arrays with duplicate elements", () => {
    expect(countingSort([4, 2, 4, 1, 2, 3, 1])).toEqual([1, 1, 2, 2, 3, 4, 4]);
  });

  it("should handle arrays with consecutive integers", () => {
    expect(countingSort([5, 4, 3, 2, 1, 0])).toEqual([0, 1, 2, 3, 4, 5]);
  });
});
