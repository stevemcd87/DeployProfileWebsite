class CreateLifeStories < ActiveRecord::Migration[5.2]
  def change
    create_table :life_stories do |t|
      t.text :past
      t.text :present
      t.text :future
      t.belongs_to :profile

      t.timestamps
    end
  end
end
