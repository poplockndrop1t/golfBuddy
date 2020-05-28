export function formatClubTitle(string) {
  let firstChar = string[0].toUpperCase();
  let remainder = string.slice(1);
  return `${firstChar}${remainder}`;
};