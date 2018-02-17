class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :name
      t.string :url
      t.time :duration

      t.timestamps null: false
    end
  end
end
