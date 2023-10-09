// create your loops here.
function whileLoop1() {
  const arr = [];
  let i = 0;
  while (i < 10) {
    arr.push(i);
    i++;
  }
  return arr;
}
console.log('whileLoop1:', whileLoop1());

function whileLoop2() {
  const arr = [];
  let i = 0;
  while (i < 20) {
    arr.push(i);
    i = i += 2;
  }
  return arr;
}
console.log('whileLoop2: ', whileLoop2());

function forLoop1() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(i);
  }
  return arr;
}
console.log('forLoop1:', forLoop1());

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('Time till explosion ' + i + '!');
  }
  return 'Boom!';
}
console.log(forLoop2());

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(x) {
  const arr = [];
  for (x in object) {
    arr.push(x);
  }
  return arr;
}
console.log(forInLoop1(object));

function forInLoop2(n) {
  const arr1 = [];
  for (n in object) {
    arr1.push(object[n]);
  }
  return arr1;
}
console.log(forInLoop2(object));
