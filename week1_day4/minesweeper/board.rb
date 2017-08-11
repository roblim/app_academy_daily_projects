require_relative 'tile'

class Board
  attr_accessor :grid

  def initialize
    @grid = Array.new(9) { Array.new(9) }
    populate_grid
  end

  def populate_grid
    bomb_counter = 0

    @grid.map! { |row| row.map do |tile|
      if bomb_counter <= 9
        bomb_counter += 1
        tile = Tile.new(true)
      else
        tile = Tile.new
      end
    end
    }.flatten!.shuffle!

    @grid = @grid.each_slice(9).to_a

  end

  def gen_counts
    @grid.each_with_index do |row, y_idx|
      row.each_with_index do |tile, x_idx|
        if tile.bomb == true

          set_num(y_idx, x_idx)


        end
      end
    end
  end

  def set_num(y_idx, x_idx)
    total_bombs = 1
    if #this position

    elsif #this position

    elsif #this position

    elsif #this position

    elsif #this position

    elsif #this position

    elsif #this position

    elsif #this position

    end
  end

end
