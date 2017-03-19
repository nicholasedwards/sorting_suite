class MergeSort


  def sort(data)

    # Base case
    if data.length < 2
      return data
    end

    sub_array_1, sub_array_2 = split_data(data)
    
    sorted_sub_array_1 = sort(sub_array_1)
    sorted_sub_array_2 = sort(sub_array_2)

    return merge_data(sorted_sub_array_1, sorted_sub_array_2)

  end



  def split_data(data)
    
    split_index = ((data.length - 1) / 2).floor
    before_split = data[0..split_index]
    after_split = data[split_index + 1 .. data.length - 1]

    return before_split, after_split
  end




  def merge_data(a, b)

    sorted_array = []
    
    until a.empty? && b.empty? do
      if !a.empty? && !b.empty? && a[0] > b[0]
        sorted_array.push(b.shift)
      elsif !a.empty? && !b.empty? && b[0] > a[0]
        sorted_array.push(a.shift)
      elsif a.empty?
        sorted_array.push(b.shift)
      elsif b.empty?
        sorted_array.push(a.shift)
      end
    end

    return sorted_array
  end


end

merge_sorter = MergeSort.new

puts merge_sorter.sort(["d", "b", "a", "c", "y", "z", "x", "w"])

