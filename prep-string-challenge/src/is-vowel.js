/* exported isVowel */

function isVowel(character) {
  if (
    character === 'a' ||
    character === 'e' ||
    character === 'i' ||
    character === 'o' ||
    character === 'u'
  ) {
    return true;
  } else if (
    character === 'a'.toUpperCase() ||
    character === 'e'.toUpperCase() ||
    character === 'i'.toUpperCase() ||
    character === 'o'.toUpperCase() ||
    character === 'u'.toUpperCase()
  ) {
    return true;
  } else {
    return false;
  }
}
