class CreateSocialNetworks < ActiveRecord::Migration[5.2]
  def change
    create_table :social_networks do |t|
      t.integer :name
      t.string :url_link
      t.references :profile, foreign_key: true

      t.timestamps
    end
  end
end
