class SocialNetwork < ApplicationRecord
  enum name: [:linkedin, :github, :twitter]

  belongs_to :profile
end
