# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    @profles = Profile.all
    @profile = Profile.first
  end
end
