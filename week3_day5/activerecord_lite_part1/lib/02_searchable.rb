require_relative 'db_connection'
require_relative '01_sql_object'

module Searchable
  def where(params)
    where_line = params.keys.map { |attribute| "#{attribute} = ?" }.join(" AND ")
    values = params.values
    result = DBConnection.execute(<<-SQL, *values)
      SELECT
        *
      FROM
        #{self.table_name}
      WHERE
        #{where_line}
    SQL
    result.map { |res| self.new(res) }
  end
end

class SQLObject
  # Mixin Searchable here...
  extend Searchable
end
