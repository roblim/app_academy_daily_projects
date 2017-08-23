require_relative 'db_connection'
require 'active_support/inflector'
require 'byebug'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    unless @columns
      temp_cols = DBConnection.execute2(<<-SQL)
        SELECT
          *
        FROM
          "#{table_name}"
        SQL
      @columns = temp_cols.first.map(&:to_sym)
    end
    @columns
  end

  def self.finalize!
    self.columns
    @columns.each do |col_name|
      define_method(col_name) { attributes[col_name] }
      define_method("#{col_name}=") { |obj| attributes[col_name] = obj }
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name ||= self.to_s.tableize
  end

  def self.all
    records = DBConnection.execute(<<-SQL)
      SELECT
        "#{@table_name}".*
      FROM
        "#{@table_name}"
    SQL

    parse_all(records)
  end

  def self.parse_all(results)
    results.map { |result| self.new(result) }
  end

  def self.find(id)
    result = DBConnection.execute(<<-SQL, id)
      SELECT
        "#{@table_name}".*
      FROM
        "#{@table_name}"
      WHERE
        id = ?
    SQL
    return nil if result.empty?
    self.new(result.first)
  end

  def initialize(params = {})
    attributes = params
    columns = self.class.columns
    attributes.each do |attribute, value|
      raise "unknown attribute '#{attribute}'" unless columns.include?(attribute.to_sym)
      self.send("#{attribute}=", value)
    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    attributes.values
  end

  def insert
    col_names = self.class.columns[1..-1].join(', ')
    question_marks = (["?"] * (self.class.columns.count - 1)).join(', ')

    DBConnection.execute(<<-SQL, *attribute_values)
      INSERT INTO
        #{self.class.table_name} (#{col_names})
      VALUES
        (#{question_marks})
    SQL
    self.id = DBConnection.last_insert_row_id
  end

  def update
    col_set = self.class.columns[1..-1].map { |col| "#{col} = ?"}.join(', ')
    DBConnection.execute(<<-SQL, *attribute_values[1..-1], self.id)
      UPDATE
        #{self.class.table_name}
      SET
        #{col_set}
      WHERE
        id = ?
    SQL
  end

  def save
    id.nil? ? insert : update
  end
end
