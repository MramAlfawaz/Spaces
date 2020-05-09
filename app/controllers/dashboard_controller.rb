class DashboardController < ApplicationController
  def space
    @favorites = Favorite.where(user_id: current_user)
    @weathers = Weather.all
    @notes = Note.where(user_id: current_user)
    @todo_lists = TodoList.where(user_id: current_user)

  end
end
