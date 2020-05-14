class DashboardController < ApplicationController
  def space
    @favorites = Favorite.all.where(user_id: current_user).order('created_at DESC').limit(3)
    @notes = Note.all.where(user_id: current_user).order('created_at DESC').limit(2)
    @todo_lists = TodoList.where(user_id: current_user).all.order('created_at DESC').limit(2)
    
  end
end
