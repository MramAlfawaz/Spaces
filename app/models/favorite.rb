require 'open-uri'

class Favorite < ApplicationRecord
    belongs_to :user
end
