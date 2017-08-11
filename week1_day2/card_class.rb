class Card
  attr_reader :shown, :value

  def initialize(value)
    @value = value
    @shown = nil
  end

  def reveal
    @shown = true
  end

  def hide
    @shown = nil
  end

  def display
    @shown ? @value : ""
  end
end
