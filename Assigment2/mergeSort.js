const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = parseInt(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  const merge = (left, right) => {
    let myArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {

      if (left[leftIndex] < right[rightIndex]) {
        myArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        myArray.push(right[rightIndex]);
        rightIndex++;
      }
      
    }

    return myArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  };

  return merge(mergeSort(left), mergeSort(right));
};

export default mergeSort;
