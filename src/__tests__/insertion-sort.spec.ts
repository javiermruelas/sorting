import { insertionSort } from "../insertion-sort";

describe("Insertion Sort", () => {
  it("should sort an unsorted array", () => {
    expect(insertionSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  });

  it("should handle empty arrays", () => {
    expect(insertionSort([])).toEqual([]);
  });

  it("should handle arrays with negative numbers", () => {
    expect(insertionSort([3, -1, 4, -5, 2])).toEqual([-5, -1, 2, 3, 4]);
  });

  it("should maintain stability for equal elements", () => {
    const input = [
      { val: 3, id: 1 },
      { val: 2, id: 2 },
      { val: 3, id: 3 },
    ];
    const expected = [
      { val: 2, id: 2 },
      { val: 3, id: 1 },
      { val: 3, id: 3 },
    ];
    expect(insertionSort(input, (a, b) => a.val - b.val)).toEqual(expected);
  });
});
