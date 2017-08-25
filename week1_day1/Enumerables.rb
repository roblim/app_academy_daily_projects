class Array
  def my_each(&prc)
    idx = 0
    while idx < self.length
      prc.call(self[idx])
      idx += 1
    end
    self
  end

  def my_select(&prc)
    new_arr = []
    self.my_each { |el| new_arr << el if prc.call(el) }
    new_arr
  end

  def my_reject(&prc)
    new_arr = []
    self.my_each { |el| new_arr << el unless prc.call(el) }
    new_arr
  end

  def my_any?(&prc)
    count = 0
    self.my_each { |el| count +=1 if prc.call(el)}
    count > 0
  end

  def my_all?(&prc)
    count = 0
    self.my_each { |el| count += 1 if prc.call(el)}
    count == self.length
  end

  def my_flatten
    flattened_array = []
    self.my_each do |el|
      flattened_array << el if el.class != Array
      flattened_array += el.my_flatten if el.class == Array
    end
    flattened_array
  end

  def my_zip(*arr)
    zipped_arr = []
    temp_arr = []
    idx = 0
    self.my_each do |el|
      temp_arr << self[idx]
      arr.my_each do |el2|
        temp_arr << el2[idx]
      end
      zipped_arr << temp_arr
      temp_arr = []
      idx += 1
    end
    zipped_arr
  end

  def my_rotate(idx = 1)
    if idx > 0
      idx.times { self.push(self.shift)}
    elsif idx < 0
      idx = idx.abs
      idx.times { self.unshift(self.pop)}
    end
    self
  end

  def my_join(sep = "")
    string = ""
    idx = 0
    self.each do |el|
      string += (el + sep)
      break if idx == self.length - 1
      string += sep
      idx += 1
    end
    string
  end

  def my_reverse
    idx = -1
    new_arr = []
    while idx >= (self.length * -1)
      new_arr << self[idx]
      idx -= 1
    end
    new_arr
  end

end
