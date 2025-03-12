import { radixSort } from "../radix-sort";

describe("Radix Sort", () => {
  it("should sort an unsorted array of positive integers", () => {
    expect(radixSort([170, 45, 75, 90, 802, 24, 2, 66])).toEqual([
      2, 24, 45, 66, 75, 90, 170, 802,
    ]);
  });

  it("should handle empty arrays", () => {
    expect(radixSort([])).toEqual([]);
  });

  it("should handle arrays with single digits", () => {
    expect(radixSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  });

  it("should handle arrays with same number of digits", () => {
    expect(radixSort([123, 321, 232, 456, 343])).toEqual([
      123, 232, 321, 343, 456,
    ]);
  });
});
