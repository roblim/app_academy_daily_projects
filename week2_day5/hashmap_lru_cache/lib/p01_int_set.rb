class MaxIntSet
  def initialize(max)
    @store = Array.new(max) { false }
    @max = max
  end

  def insert(num)
    is_valid?(num)
    @store[num] = true
  end

  def remove(num)
    is_valid?(num)
    @store[num] = false
  end

  def include?(num)
    is_valid?(num)
    @store[num]
  end

  private

  def is_valid?(num)
    raise "Out of bounds" unless num.between?(0, @max)
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    bucket = self[num]

    if bucket.include?(num)
      return false
    else
      bucket << num
      return true
    end
  end

  def remove(num)
    bucket = self[num]
    bucket.delete(num) ? true : false
  end

  def include?(num)
    bucket = self[num]
    bucket.include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % @store.length]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet < IntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    resize! unless @count + 1 <= @store.length
    @count += 1 if super
  end

  def remove(num)
    @count -= 1 if super
  end

  private

  def resize!
    new_length = @store.length * 2
    contents = @store.flatten
    @store = Array.new(new_length) { Array.new }
    @count = 0
    insert(contents.pop) until contents.empty?
  end
  # def [](num)
  #   # optional but useful; return the bucket corresponding to `num`
  # end
  #
  # def num_buckets
  #   @store.length
  # end

end
