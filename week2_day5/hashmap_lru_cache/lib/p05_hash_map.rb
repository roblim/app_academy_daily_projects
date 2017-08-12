require_relative 'p02_hashing'
require_relative 'p04_linked_list'

class HashMap
  include Enumerable
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { LinkedList.new }
    @count = 0
  end

  def include?(key)
    !!bucket(key).include?(key)
  end

  def set(key, val)
    unless include?(key)
      resize! if @count > @store.length
      bucket(key).append(key, val)
      @count += 1
    else
      bucket(key).update(key, val)
    end
  end

  def get(key)
    bucket(key).get(key)
  end

  def delete(key)
    @count -= 1 if bucket(key).remove(key)
  end

  def each(&prc)
    @store.each do |ll|
      ll.each do |node|
        yield(node.key, node.val)
      end
    end
  end

  # uncomment when you have Enumerable included
  # def to_s
  #   pairs = inject([]) do |strs, (k, v)|
  #     strs << "#{k.to_s} => #{v.to_s}"
  #   end
  #   "{\n" + pairs.join(",\n") + "\n}"
  # end

  alias_method :[], :get
  alias_method :[]=, :set

  private

  def num_buckets
    @store.length
  end

  def resize!
    lls = @store.flatten    # get all the linked lists
    @store = Array.new(@count * 2) { LinkedList.new } # reset the store to double size

    lls.each do |ll|
      ll.each do |node|
        self.set(node.key, node.val)
      end
    end
  end

  def bucket(key)
    k_hash = key.hash
    index = k_hash % @store.length
    @store[index]
  end
end
