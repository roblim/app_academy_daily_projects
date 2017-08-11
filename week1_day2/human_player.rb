class Human

  attr_accessor :score :game

  def initialize(name)
    @name = name
    @score = 0
    @game = nil
  end

  def get_guess
    print "#{@name}, please provide a guess (col row): "
    guess = gets.chomp.split.map(&:to_i)
  end

end
