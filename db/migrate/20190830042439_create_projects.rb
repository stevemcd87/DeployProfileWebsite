class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :technologies, array: true
      t.string :description
      t.string :url_link

      t.timestamps
    end
  end
end
