import { bucketSort } from "../bucket-sort";

describe("Bucket Sort", () => {
  it("should return empty array when input is empty", () => {
    expect(bucketSort([])).toEqual([]);
  });

  it("should return same array when input has single element", () => {
    expect(bucketSort([1])).toEqual([1]);
  });

  it("should sort array with positive numbers", () => {
    expect(bucketSort([64, 34, 25, 12, 22, 11, 90])).toEqual([
      11, 12, 22, 25, 34, 64, 90,
    ]);
  });

  it("should handle already sorted array", () => {
    expect(bucketSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle array with duplicate numbers", () => {
    expect(bucketSort([3, 1, 3, 2, 1, 2])).toEqual([1, 1, 2, 2, 3, 3]);
  });
});
