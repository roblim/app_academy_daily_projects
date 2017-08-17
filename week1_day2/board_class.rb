require_relative "card_class"

class Board
  attr_reader :grid

  def initialize(dimension)
    raise "not even" unless dimension.even?
    @grid = populate(dimension).each_slice(dimension).to_a
  end

  def populate(dimension)
    range = (0...dimension ** 2 / 2).to_a
    cards = range + range
    cards.map! { |num| Card.new(num) }
    cards.shuffle!
  end

  def render
    grid_display = @grid.map do |row|
      row.map {|col| col.display}
    end
    grid_display.each {|row| p row }
  end

  def won?
    @grid.flatten.none? {|card| card.shown.nil?}
  end

  def reveal(guess_pos)
    self[guess_pos].reveal
    self[guess_pos].value
  end

  def [](pos)
    y, x = pos
    @grid[y][x]
  end

  def []=(pos, value)
    y, x = pos
    @grid[y][x] = value
  end
end

if __FILE__ == $PROGRAM_NAME
  x = Board.new(4)
  p x.grid
  x.render
  x.reveal([0,0])
  x.render
end
