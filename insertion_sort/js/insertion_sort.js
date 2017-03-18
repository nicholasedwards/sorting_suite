window.onload = function insertionSort() {

  var data = ["d", "c", "a", "b", "w", "y", "z", "x"]

  var sorted_data = [];

  while (data.length > 0) {

    var element_to_insert = data.shift();

    var index = sorted_data.length - 1;

    // If sorted array is empty, put the element_to_insert in it.
      if (sorted_data.length == 0) {
        sorted_data.push(element_to_insert);
      }

    // If the element_to_insert belongs at the end of the sorted array, put it there.
    // If the element_to_insert belongs between two elements in the sorted array, insert it there.
    // If the element_to_insert belongs at the beginning of the sorted array, insert it there.
    while (index >= 0) {
      if (element_to_insert >= sorted_data[sorted_data.length - 1]) {
        sorted_data.push(element_to_insert);
        break;
      } else if (element_to_insert >= sorted_data[index] && element_to_insert <= sorted_data[index + 1]) {
        sorted_data.splice(index + 1, 0, element_to_insert);
        break;
      } else if (index == 0) {
        sorted_data.unshift(element_to_insert);     
        break   
      }
      index --;
    }

  }
  
  while (sorted_data.length > 0) {

    var elementContainer = document.createElement("div");
    elementContainer.className = "element-container";

    var element = document.createElement("div");
    element.innerHTML = sorted_data.shift();

    elementContainer.appendChild(element);
    document.getElementById("sorted-elements-container").appendChild(elementContainer);

  }

}
