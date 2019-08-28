# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    @profles = Profile.all
    profile = Profile.first
    @profile = {
      id: profile[:id],
      full_name: profile.full_name_to_display,
      email: profile[:email],
      phone_number: profile[:phone_number]
    } if profile
  end
end
