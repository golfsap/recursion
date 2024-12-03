// iterative fibonacci
function fibs(n) {
  let arr = [];
  if (n < 0) return arr;
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      arr.push(0);
    } else if (i === 1) {
      arr.push(1);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }
  return arr;
}

console.log(fibs(8));

function fibsRec(n) {
  //   if (n <= 0) return [];
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const arr = fibsRec(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}

console.log(fibsRec(8));
