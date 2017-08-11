require_relative "board_class"
require_relative "card_class"
require_relative "human_player"

class Game
  attr_reader :board, :previous_guess, :current_guess

  def initialize(dimension, player1, player2)
    @board = Board.new(dimension)
    @previous_guess = nil
    @player1 = player1
    @player2 = player2
    @player1.game = self
    @player2.game = self
    @current_player = player1
    @memory = {}
  end

  # def get_guess
  #   print "Please provide a guess (col row): "
  #   guess = gets.chomp.split.map(&:to_i)
  # end

  def make_guess
    system("clear")
    @board.render
    valid = nil
    guess = nil
    until valid
      guess = @current_player.get_guess
      valid = valid_move?(guess)
    end
    @memory[@board[guess].value] = guess
    @board.reveal(guess)
    system("clear")
    @board.render

    if @previous_guess
      if @previous_guess.value != @board[guess].value
        sleep(2)
        @previous_guess.hide
        @board[guess].hide
      else
        @current_player.score += 1
      end
      @previous_guess = nil
    else
      @previous_guess = @board[guess]
    end
  end

  def valid_move?(guess)
    !@board[guess].shown

  end

  def play_round
    2.times do
      make_guess
    end
    swap_player
  end

  def play
    system('clear')
    until @board.won?
      play_round
    end
    puts "#{@player1.name}: #{@player1.score}"
    puts "#{@player2.name}: #{@player2.score}"
    if @player1.score > @player2.score
      return "#{@player1.name} wins!"
    elsif @player2.score > @player1.score
      return "#{@player2.name} wins!"
    else
      return "Its a tie."
    end
  end

  def swap_player
    if @current_player == @player1
      @current_player = @player2
    else
      @current_player = @player1
    end
  end
end



if __FILE__ == $PROGRAM_NAME
  x = Game.new(2, Human.new('Rob'), Human.new('Ricki')).play
end
