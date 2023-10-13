/* exported getWords */

function getWords(string) {
  const arr = [];
  const result = string.split(' ');
  if (string === '') {
    return arr;
  } else {
    return result;
  }
}
