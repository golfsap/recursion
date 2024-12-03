function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let leftArr = arr.slice(0, Math.floor(arr.length / 2));
  let rightArr = arr.slice(Math.floor(arr.length / 2));
  let result = merge(mergeSort(leftArr), mergeSort(rightArr));
  return result;
}

const merge = (left, right) => {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left[0]);
      left.shift();
    } else {
      result.push(right[0]);
      right.shift();
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
};

console.log(mergeSort([2, 5, 1, 2, 7, 8]));
