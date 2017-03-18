window.onload = function bubbleSort() {

  var data = ["d", "c", "a", "b", "w", "y", "z", "x"]

  var sorted_data = [];

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
  
  while (sorted_data.length > 0) {

    var elementContainer = document.createElement("div");
    elementContainer.className = "element-container";

    var element = document.createElement("div");
    element.innerHTML = sorted_data.shift();

    elementContainer.appendChild(element);
    document.getElementById("sorted-elements-container").appendChild(elementContainer);

  }

}
