require 'minitest/autorun'
require './insertion_sort.rb'

class TestSort < MiniTest::Unit::TestCase

  def setup
    @data = ["d", "b", "a", "c"]
    @insertion_sorter = InsertionSort.new
  end

  def test_that_insertion_sort_works
    assert_equal ["a", "b", "c", "d"], @insertion_sorter.sort(@data)
  end

end
