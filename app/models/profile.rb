class Profile < ApplicationRecord
  has_one :life_story, dependent: :destroy
  has_many :social_networks, dependent: :destroy
  has_many :projects, dependent: :destroy

  def full_name_to_display
    first_name = self.first_name.capitalize
    middle_name = self.middle_name ? "#{self.middle_name.first.capitalize}." : ""
    last_name = self.last_name.capitalize
    "#{first_name} #{middle_name} #{last_name}"
  end

  def front_end_profile
    {
      id: self[:id],
      full_name: self.full_name_to_display,
      email: self[:email],
      phone_number: self[:phone_number],
      life_story: self.life_story,
      social_networks: self.social_networks,
      projects: self.projects
    }
  end

end
