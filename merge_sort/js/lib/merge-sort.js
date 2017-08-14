function mergeSort(data) {
  if (data.length == 1) {
    return data;
  } else {

	  var first_half = splitData({ data: data, operation: 'get-first-half' });
	  var second_half = splitData({ data: data, operation: 'get-second-half'});

	  var first_half_sorted = mergeSort(first_half);
	  var second_half_sorted = mergeSort(second_half);

	  var sorted_data = merge(first_half_sorted, second_half_sorted);

	  return sorted_data;
  }
}

function splitData(args) {
  var data = args.data;
  var operation = args.operation;

  var split_index = Math.round((data.length / 2));

  if (operation == "get-first-half") {
    return data.slice(0, split_index);
  } else if (operation == "get-second-half") {
    return data.slice(split_index, data.length);
  }
}

function merge(data1, data2) {
  var merged_data = [];
  while (data1.length > 0 || data2.length > 0) {
	  if ( data1[0] < data2[0] || data2.length == 0 ) {
	    merged_data.push(data1[0]);
	    data1.shift();
	  } else if ( data2[0] < data1[0] || data1.length == 0 ) {
	    merged_data.push(data2[0]);
	    data2.shift();
	  }
  }
  return merged_data;
}

module.exports = mergeSort;
