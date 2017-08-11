require_relative "card_class"
require_relative "board_class"
require_relative "game_class"

class Computer
  attr_accessor :score, :game

  def initialize
    @score = 0
    @game = nil
  end

  def random_guess
    [rand(@game.board.length),rand(@game.board.length)]
  end

end
