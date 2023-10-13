/* exported initial */

function initial(array) {
  const arr = [];
  let a = 0;
  for (let i = 0; i < array.length - 1; i++) {
    arr[a] = array[i];
    a++;
  }
  return arr;
}
