import { randomQuickSort } from "../random-quick-sort";

describe("Random Quick Sort", () => {
  it("should sort an unsorted array", () => {
    expect(randomQuickSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  });

  it("should handle empty arrays", () => {
    expect(randomQuickSort([])).toEqual([]);
  });

  // it("should handle large arrays", () => {
  //   const input = Array.from({ length: 1000 }, () =>
  //     Math.floor(Math.random() * 1000)
  //   );
  //   const sorted = [...input].sort((a, b) => a - b);
  //   expect(randomQuickSort(input)).toEqual(sorted);
  // });

  it("should handle arrays with many duplicates", () => {
    expect(randomQuickSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3])).toEqual([
      1, 1, 2, 3, 3, 4, 5, 5, 6, 9,
    ]);
  });
});
