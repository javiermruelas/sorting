import { mergeSort } from "../merge-sort";

describe("Merge Sort", () => {
  it("should sort an unsorted array", () => {
    expect(mergeSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  });

  it("should handle empty arrays", () => {
    expect(mergeSort([])).toEqual([]);
  });

  it("should handle large arrays", () => {
    const input = Array.from({ length: 1000 }, () =>
      Math.floor(Math.random() * 1000)
    );
    const sorted = [...input].sort((a, b) => a - b);
    expect(mergeSort(input)).toEqual(sorted);
  });

  it("should be stable for equal elements", () => {
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
    expect(mergeSort(input, (a, b) => a.val - b.val)).toEqual(expected);
  });
});
