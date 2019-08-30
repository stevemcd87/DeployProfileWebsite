class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :url_link
      t.string :technologies, array: true
      t.string :description
      t.references :profile, foreign_key: true

      t.timestamps
    end
  end
end
