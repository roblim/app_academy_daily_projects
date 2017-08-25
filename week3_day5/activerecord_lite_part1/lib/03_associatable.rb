require_relative '02_searchable'
require 'active_support/inflector'

# Phase IIIa
class AssocOptions
  attr_accessor(
    :foreign_key,
    :class_name,
    :primary_key
  )

  def model_class
    class_name.to_s.constantize
  end

  def table_name
    model_class.table_name
  end
end

class BelongsToOptions < AssocOptions
  def initialize(name, options = {})
    f_key = options[:foreign_key]
    p_key = options[:primary_key]
    c_name = options[:class_name]

    f_key ? self.foreign_key = f_key : self.foreign_key = "#{name}_id".to_sym
    p_key ? self.primary_key = p_key : self.primary_key = :id
    c_name ? self.class_name = c_name : self.class_name = name.capitalize
  end
end

class HasManyOptions < AssocOptions
  def initialize(name, self_class_name, options = {})
    f_key = options[:foreign_key]
    p_key = options[:primary_key]
    c_name = options[:class_name]

    f_key ? self.foreign_key = f_key : self.foreign_key = "#{self_class_name.downcase}_id".to_sym
    p_key ? self.primary_key = p_key : self.primary_key = :id
    c_name ? self.class_name = c_name : self.class_name = name.singularize.capitalize

  end
end

module Associatable
  # Phase IIIb
  def belongs_to(name, options = {})
      
  end

  # options = BelongsToOptions.new(name, options)
  # foreign_key = options.send(:foreign_key)
  # define_method(name) do
  #   result = DBConnection.execute(<<-SQL, foreign_key)
  #     SELECT *
  #     FROM #{options.table_name}
  #     WHERE id = ?
  #   SQL
  #   options.model_class.new(result.first)
  # end

  def has_many(name, options = {})
    # ...
  end

  def assoc_options
    # Wait to implement this in Phase IVa. Modify `belongs_to`, too.
  end
end

class SQLObject
  extend Associatable
end
