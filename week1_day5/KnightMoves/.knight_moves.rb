class KnightPathFinder
  def initialize(start_pos)
    @start_pos = start_pos
    @move_tree = []
    @visited_positions = []
    build_move_tree
  end

  def build_move_tree

  end

  def self.valid_moves(pos)
    row, col = pos
    valid_moves = [[row-2, col-1],
    [row-2, col+1],
    [row-1, col-2],
    [row-1, col+2],
    [row+1, col-2],
    [row+1, col+2],
    [row+2, col-1],
    [row+2, col+1]].select do |pos|
      (0..7).include?(pos[0]) && (0..7).include?(pos[1])
    end


  end

end
