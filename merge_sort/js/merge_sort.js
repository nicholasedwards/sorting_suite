window.onload = function mergeSort() {
  
  // Generate random data
  var data = [];
  for (i = 0; i < 7; i++) {
    data[i] = Math.floor(Math.random() * 100);
  }

  // Put the unsorted data in the DOM
  for (i = 0; i < data.length; i++) {

    var elementContainer = document.createElement("div");
    elementContainer.className = "element-container";

    var element = document.createElement("div");
    element.innerHTML = data[i];

    elementContainer.appendChild(element);
    document.getElementById("unsorted-elements-container").appendChild(elementContainer);

  }  

  var sort  = function(data) {

    // Base case
    if (data.length < 2) {
      return data;
    } 
    
    else {
      var first_sub_array = get_first_half(data);
      var second_sub_array = get_second_half(data);

      var first_sorted_array = sort(first_sub_array);
      var second_sorted_array = sort(second_sub_array);

      var merged_arrays = merge_arrays(first_sorted_array, second_sorted_array);

      // console.log("first_sorted_array is " + first_sorted_array);
      // console.log("second_sorted_array is " + second_sorted_array);
      // console.log(" ")

      return merged_arrays;   
    }
  
  }

  var get_first_half = function(data) {
    var un_rounded_split_index = ((data.length - 1) / 2);
    var split_index = Math.floor(un_rounded_split_index);
    var before_split = data.slice(0, split_index + 1);
    return before_split;
  }

  var get_second_half = function(data) {
    var un_rounded_split_index = ((data.length - 1) / 2);
    var split_index = Math.floor(un_rounded_split_index);  
    var after_split = data.slice(split_index + 1, data.length);
    return after_split;
  }

  var merge_arrays = function(array_1, array_2) {
    var sorted_array = []; 

    while (array_1.length > 0 || array_2.length > 0) {
      if (array_1.length > 0 && array_2.length > 0 && array_1[0] > array_2[0]) {
        sorted_array.push(array_2.shift());
      } else if (array_1.length > 0 && array_2.length > 0 && array_2[0] > array_1[0]) {
        sorted_array.push(array_1.shift());
      } else if (array_1.length == 0) {
        sorted_array.push(array_2.shift());
      } else if (array_2.length == 0) {
        sorted_array.push(array_1.shift());
      }
    }

    return sorted_array;
  }

  // Sort the data
  var sorted_data = sort(data);

  // Append the sorted data to the DOM
 while (sorted_data.length > 0) {

   var elementContainer = document.createElement("div");
   elementContainer.className = "element-container";

   var element = document.createElement("div");
   element.innerHTML = sorted_data.shift();

   elementContainer.appendChild(element);
   document.getElementById("sorted-elements-container").appendChild(elementContainer);

 }

}

function randomizeData() {
  location.reload();
}
