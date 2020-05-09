class DashboardController < ApplicationController
  def space
    @favorites = Favorite.all
    @weathers = Weather.all
  end
end
