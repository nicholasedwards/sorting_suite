require 'minitest/autorun'
require './merge_sort.rb'

class TestSort < MiniTest::Unit::TestCase

  def setup
    @data = ["d", "b", "a", "c"]
    @merge_sorter = MergeSort.new
  end

  def test_that_insertion_sort_works
    assert_equal ["a", "b", "c", "d"], @merge_sorter.sort(@data)
  end

end
