/* exported tail */

function tail(array) {
  const arr = [];
  let a = 0;
  for (let i = 1; i < array.length; i++) {
    arr[a] = array[i];
    a++;
  }
  return arr;
}
