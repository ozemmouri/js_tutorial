let a = [15, 3, 5, 45, 8];
function numberCompare(a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  };
console.log(a.sort(numberCompare));