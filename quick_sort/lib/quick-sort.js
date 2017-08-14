function quickSort(data) {
  // base case: if the data array only has one element, return that element
  // pick a pivot element from the data array
    // use a random element as the pivot in order to avoid the worst-case
    // scenario of slow runtime from sorting an already sorted array
  // declare arrays for holding data which is lesser or greater than the pivot
  // for each element in the data set:
    // if it is greater than the pivot, push it onto the greater array
    // if it is less than the pivot, push it onto the lesser array
  // recursively call quickSort on the lesser array and the greater array
  // concatenate the lesser array, the pivot, and the greater array into a final
  // array, and return that array
}

module.exports = quickSort;
