class Game
  attr_reader :dictionary, :current_player, :previous_player

  def initialize(player1, player2)
    @player1 = player1
    @player2 = player2
    @fragment = ''
    @dictionary = {}
    @current_player = player1
    File.foreach('dictionary.txt') { |line| @dictionary[line.chomp] = true }
    @losses = {
      @player1 => 0,
      @player2 => 0
    }
  end

  def next_player!
    @previous_player = @current_player
    if @current_player != @player1
      @current_player = @player1
    else
      @current_player = @player2
    end
  end

  def take_turn(player)
    puts "Current fragment: #{@fragment}"
    while true
      letter = player.guess
      break if valid_play?(letter)
      player.alert_invalid_guess
    end
    @fragment += letter
  end

  def game_over?
    @dictionary[@fragment] == true
  end

  def valid_play?(char)
    alphabet = ('a'..'z').to_a
    temp = @fragment + char
    bool1 = alphabet.include?(char)
    bool2 = @dictionary.keys.any? { |k| k[0...temp.length] == temp }
    bool1 && bool2 && char.length == 1
  end

  def play_round
    until game_over?
      take_turn(@current_player)
      next_player! if !game_over?
    end
    @losses[@current_player] += 1
    puts "Oops! #{@current_player.name}, you lost this round. #{@previous_player.name} wins!"
    puts "The word was: #{@fragment}"
    @fragment = ""
  end

  def record(player)
    string = "GHOST"
    string[0...@losses[player]]
  end

  def run
    system("clear")
    until @losses.has_value?(5)
      display_standings
      play_round
      print "Press enter to continue."
      gets
    end
    display_standings
    puts "#{@previous_player.name} wins!"
  end

  def display_standings
    system("clear")
    puts "#{@player1.name}: #{record(@player1)}"
    puts "#{@player2.name}: #{record(@player2)}\n\n"
  end
end

class Player
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def guess
    print "Guess a letter, #{@name}: "
    input = gets.chomp
    puts ""
    input
  end

  def alert_invalid_guess
    puts "Invalid, guess again!"
  end
end

if __FILE__ == $PROGRAM_NAME
  game = Game.new(Player.new('Rob'), Player.new('AJ'))
  game.run
end
