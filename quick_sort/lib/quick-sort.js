var pry = require('pryjs');

function quickSort(data) {
  if (data.length <= 1) {
    return data;
  }
  var pivot_index = Math.floor(Math.random() * data.length);
  var lesser_than_pivot = [];
  var greater_than_pivot = [];
  for (i = 0; i < data.length; i++) {
	    if (data[i] < data[pivot_index]) {
	      lesser_than_pivot.push(data[i]);
	    } else {
	      greater_than_pivot.push(data[i]);
	    }
	  }
  var sorted_lesser = quickSort(lesser_than_pivot);
  var sorted_greater = quickSort(greater_than_pivot);
  return sorted_lesser.concat(sorted_greater);
}

module.exports = quickSort;
