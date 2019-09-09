# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    @signed_in = admin_signed_in?
    @profles = Profile.all
    profile = Profile.first
    @profile = profile.front_end_profile if profile
  end

end
