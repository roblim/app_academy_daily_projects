class Fixnum
  # Fixnum#hash already implemented for you
end

class Array
  def hash
    sum = 0

    each_with_index do |e, i|
      sum += e.hash * i
    end

    sum.hash
  end
end

class String
  def hash
    sum = 0

    each_char.with_index do |c, i|
      sum += c.ord * i
    end

    sum.hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    sum = 0

    each do |k, v|
      k_h = k.hash
      v_h = v.hash

      sum += k_h * v_h
    end

    sum.hash
  end
end
