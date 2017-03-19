window.onload = function bubbleSort() {

  var data = [];
  for (i = 0; i < 7; i++){
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

  var sorted_data = [];

  // Sort the data
  while (data.length > 0) {

    var previous = data[0];
    var current = data[1];
    var pass_complete = false;
    var index = 1;

    while (pass_complete == false) {

      if (data.length > 1 && previous > current) {
        var temporary_holder = previous;
        data[index - 1] = current;
        data[index] = temporary_holder;
      }

      index ++;

      previous = data[index - 1];
      current = data[index];

      if (index == data.length || data.length == 1) {
        sorted_element = data.pop();
        sorted_data.unshift(sorted_element);
        pass_complete = true;
      }
    }

  }

  // Put the sorted data in the DOM
  for (i = 0; i < sorted_data.length; i++) {

    var elementContainer = document.createElement("div");
    elementContainer.className = "element-container";

    var element = document.createElement("div");
    element.innerHTML = sorted_data[i];

    elementContainer.appendChild(element);
    document.getElementById("sorted-elements-container").appendChild(elementContainer);

  }  

}

function randomizeData() {
  location.reload();
}
