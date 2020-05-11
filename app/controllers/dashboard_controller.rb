class DashboardController < ApplicationController
  def space
    @favorites = Favorite.where(user_id: current_user)
    @notes = Note.where(user_id: current_user)
    @todo_lists = TodoList.where(user_id: current_user)

  end
end
