import { bubbleSort } from "../bubble-sort";

describe("Bubble Sort", () => {
  it("should sort an unsorted array", () => {
    expect(bubbleSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  });

  it("should handle empty arrays", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should handle arrays with duplicate elements", () => {
    expect(bubbleSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3])).toEqual([
      1, 1, 2, 3, 3, 4, 5, 5, 6, 9,
    ]);
  });

  it("should handle already sorted arrays", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle reverse sorted arrays", () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});
