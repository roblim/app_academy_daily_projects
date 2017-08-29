class CreateSubs < ActiveRecord::Migration[5.1]
  def change
    create_table :subs do |t|

      t.timestamps
    end
  end
end
