class Profile < ApplicationRecord
  def full_name_to_display
    first_name = self.first_name.capitalize
    middle_name = self.middle_name ? "#{self.middle_name.first.capitalize}." : ""
    last_name = self.last_name.capitalize
    "#{first_name} #{middle_name} #{last_name}"
  end
end
