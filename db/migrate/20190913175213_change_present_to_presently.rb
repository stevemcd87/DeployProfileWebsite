class ChangePresentToPresently < ActiveRecord::Migration[6.0]
  def change
    rename_column :life_stories, :present, :presently
  end
end
