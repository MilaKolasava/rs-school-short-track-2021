/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) newArray.push(arr[i]);
  }

  newArray.sort((a, b) => a - b);

  let order = -1;
  const anotherArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      anotherArray.push(arr[i]);
    } else {
      order++;
      anotherArray.push(newArray[order]);
    }
  }
  return anotherArray;
}
module.exports = sortByHeight;
