json.extract! weather, :id, :link, :zip_code, :created_at, :updated_at
json.url weather_url(weather, format: :json)
