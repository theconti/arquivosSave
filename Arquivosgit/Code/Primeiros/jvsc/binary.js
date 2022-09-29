//binary search an array using recursion:

function binaryRecursive(arr, target, start = 0, end = arr.length - 1) {
    let guess = Math.floor((start + end) / 2);

    if (target === arr[guess]) {
        return guess;
    }

    if (start >= end) {
        return -1;
    }

    return target < arr[guess]
        ? binaryRecursive(arr, target, start, guess - 1)
        : binaryRecursive(arr, target, guess + 1, end);
}

//  let guess;
//  let start = 1;
//  let end = n;

//  while (start < end) {
//      guess = Math.floor((start + end) / 2);
//      if (isBadVersion(guess)) {
//          end = guess;
//      } else {
//          start = guess + 1;
//      }
//  }
//  return end;

//binary search an array

function binarySearch(nums, target) {
    let min = 0;
    let max = nums.length - 1;
    let guess;

    while (min <= max) {
        guess = Math.floor((max + min) / 2);

        if (nums[guess] === target) {
            return guess;
        } else if (nums[guess] < target) {
            min = guess + 1;
        } else if (nums[guess] > target) {
            max = guess - 1;
        }
    }

    return -1;
}

//linear search:

function linearSearch(arr, target) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return target;
        }
    }
    return -1;
}
