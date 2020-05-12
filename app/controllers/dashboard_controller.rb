class DashboardController < ApplicationController
  def space
    @favorites = Favorite.all.order('created_at DESC').limit(3)
    @notes = Note.all.order('created_at DESC').limit(2)
    @todo_lists = TodoList.all.order('created_at DESC').limit(2)

  end
end
