class BubbleSort

  def sort(data)

    sorted_data = []
    
    until data.length == 0 do

      previous = data[0]
      current = data[1]
      pass_complete = false
      index = 1

      until pass_complete == true do

        if data.length > 1 && previous > current
            temporary_holder = previous
            data[index - 1] = current
            data[index] = temporary_holder
        end

            index += 1

            previous = data[index - 1]
            current = data[index]

        if index == (data.length) || data.length == 1
          sorted_data.unshift(data.pop)
          pass_complete = true
        end

      end

    end 

    return sorted_data 
    
  end

end

# Make some data and an instance of BubbleSort. Call the sort method and print the results to the terminal.
# data = [0, 3, 1, 2, 5, 100, 4, 3]
data = ["d", "b", "a", "c"]
bubble_sorter = BubbleSort.new
puts bubble_sorter.sort(data)
