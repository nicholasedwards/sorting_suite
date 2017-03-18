require 'byebug'

class InsertionSort

  def sort(data)
    
    sorted_data = []

    until data.empty?
      
      element_to_insert = data.shift

      inserted = false

      index = sorted_data.length - 1

      loop do

        # If this is the first element to insert, the sorted_data array is empty and we can just put the element in it. No comparison is needed.
        if sorted_data.length == 0
          sorted_data[0] = element_to_insert
          break
        elsif element_to_insert >= sorted_data.last
          sorted_data.push(element_to_insert)
          break
        elsif element_to_insert >= sorted_data[index] && element_to_insert < sorted_data[index + 1]
          sorted_data.insert(index + 1, element_to_insert)
          break
        elsif index == 0
          sorted_data.unshift(element_to_insert)
          break
        end

        index -= 1

      end

    end

  return sorted_data

  end

end

sorter = InsertionSort.new

puts sorter.sort(["d", "b", "a", "c"])
