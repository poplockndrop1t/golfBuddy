export function formatClubTitle(string) {
  let firstChar = string[0].toUpperCase();
  let remainder = string.slice(1);
  return `${firstChar}${remainder}`;
};

export function isALetter(string) {
  var result = true;
  for (var i = 0; i < string.length; i++) {
    if (/[a-z]/gi.test(string[i]) === false) {
      result = false;
    }
  }
  return result;
};

export function isANumber(string) {
  var result = true;
  for (var i = 0; i < string.length; i++) {
    if (/[0-9]/gi.test(string[i]) === false) {
      result = false;
    }
  }
  return result;
};