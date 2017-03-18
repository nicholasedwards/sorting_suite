require 'minitest/autorun'
require './bubble_sort.rb'

class TestSort < MiniTest::Unit::TestCase

  def setup
    @data = [0, 8, 9, 2, 1, 3, 5, 4, 6, 7]
    @bubble_sorter = BubbleSort.new
  end

  def test_that_bubble_sort_works
    assert_equal [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], @bubble_sorter.sort(@data)
  end

end