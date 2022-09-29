var average = function (salary) {
  let totalAmount = salary
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, current) => {
      return acc + current;
    }, 0);
  return totalAmount / (salary.length - 2);
};
//console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
//console.log(average([4000, 3000, 1000, 2000]));

//console.log(arr);
//let num = 000000001011;

//const firsArr = num.toString().split('').map(Number);

var subtractProductAndSum = function (n) {
  const arr = n.toString().split('').map(Number);
  return (
    arr.reduce((acc, current) => {
      return acc * current;
    }, 1) -
    arr.reduce((acc, current) => {
      return acc + current;
    }, 0)
  );
};

var largestPerimeter = function (nums) {
  let [side1, side2, side3] = nums;
  answer = 0;
  for (let i = 0; i < nums.length; i = i + 3)
    if (
      nums[i] + nums[i + 1] > nums[i + 2] &&
      nums[i + 1] + nums[i + 2] > nums[i] &&
      nums[i + 2] + nums[i] > nums[i + 1] &&
      nums[i] + nums[i + 1] + nums[i + 2] > answer
    ) {
      answer = nums[i] + nums[i + 1] + nums[i + 2];
    }
  return answer;
};

// let arrTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

// console.log(arrTest.sort((a, b) => b - a));
var nearestValidPoint = function (x, y, points) {
  const reference = [x, y];
  for (let i = 0; i < points.length; i++) {}
};

// var nearestValidPoint = function (x, y, points) {
//   let validPoints = points.filter(point => {
//     if (point[0] === x || point[1] === y) return point;
//   });
//   return validPoints;
// };
var nearestValidPoint = function (x, y, points) {
  let shortestDist = Infinity;
  let answer;
  for (let i = 0; i < points.length; i++) {
    if (points[i][0] === x || points[i][1] === y) {
      if (
        shortestDist >
        Math.abs(x - points[i][0]) + Math.abs(y - points[i][1])
      ) {
        shortestDist = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
        answer = i;
      }
    }
  }
  return answer ?? -1;
};

// console.log(
//   nearestValidPoint(
//     (x = 3),
//     (y = 4),
//     (points = [
//       [1, 2],
//       [3, 1],
//       [2, 4],
//       [2, 3],
//       [4, 4],
//     ])
//   )
// );

var nearestValidPoint1 = function (x, y, points) {
  let validPoints = points.filter(point => {
    if (point[0] === x || point[1] === y) return point;
  });
};

const arraySign = function (nums) {
  let product = nums.reduce((acc, current) => {
    return acc * current;
  }, 1);

  if (product > 0) {
    return 1;
  } else if (product < 0) {
    return -1;
  } else {
    return -1;
  }
};

var arraySign2 = function (nums) {
  let product = nums.reduce((previous, current) => previous * current, 1);
  if (product > 0) return 1;
  else if (product < 0) return -1;
  else return 0;
};
var twoSum = function (nums, target) {
  const arrSorted = nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let sum = arrSorted[left] + arrSorted[right];
    if (sum === target) {
      return [left, right];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
};   