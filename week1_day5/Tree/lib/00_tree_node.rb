require 'byebug'

class PolyTreeNode
  def initialize(value)
    @value = value
    @parent = nil
    @children = []
  end

  def parent
    @parent
  end

  def children
    @children
  end

  def value
    @value
  end

  def parent=(new_parent)
    unless self.parent == new_parent
      @parent.children.delete(self) if @parent
      @parent = new_parent
      new_parent.children << self if new_parent && !new_parent.children.include?(self)
    end
  end

  def add_child(new_child)
    unless @children.include?(new_child)
      unless new_child.parent
        @children << new_child
        new_child.parent = (self)
      end
    end
  end

  def remove_child(child)
    raise "Error: Node is not a child" unless @children.include?(child)
    @children.delete(child)
    child.parent = nil
  end

  # def dfs(target)
  #   return self if @value == target
  #   @children.each do |child|
  #     child.dfs(target)
  #   end
  #   return nil if @parent.nil?
  # end

  def dfs(target)
    return self if @value == target
    @children.each do |child|
      result = child.dfs(target)
      return result if result
    end
    return nil
  end

  def bfs(target)
    queue = []
    queue << self
    until queue.empty?
      node = queue[0]
      queue.shift
      return node if node.value == target
      queue += node.children
    end
    nil
  end

end
