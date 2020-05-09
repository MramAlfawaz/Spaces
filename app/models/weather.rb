require 'open-uri'

class Weather < ApplicationRecord
    def city
        "hi"
        begin
            
            file = open("https://#{link}/#{zip_code}")
            contents = file.read
            unless contents.index("<h1>").nil?
                start_location = contents.index(identifier)
                header_start = contents.index("<h1>", start_location) + 4
                header_end = contents.index("</h1>", start_location) - 1
                p contents[header_start..header_end]
            else
                p "There were no h1 tags on #{link}/#{zip_code}"           
            end
           rescue
            puts "You typed somrthing wrong. Please try again."
           end
    end

    def current_temprature
        begin
            
            file = open("https://#{link}/#{zip_code}")
            contents = file.read
            unless contents.index("<h1>").nil?
                start_location = contents.index("temprature-fahrenheit")
                temp_start = contents.index(">", start_location) + 1
                temp_end = contents.index("<", start_location) - 1
                p contents[temp_start..temp_end]
            else
                p "There were no h1 tags on #{link}/#{zip_code}"           
            end
           rescue
            puts "You typed somrthing wrong. Please try again."
           end
    end

    def image
        begin
            
            file = open("https://#{link}/#{zip_code}")
            contents = file.read
            unless contents.index("<h1>").nil?
                start_location = contents.index("wx-weather-details")
                img_start = contents.index("<img", start_location) - 1
                img_end = contents.index(">", start_location) + 1
                p contents[img_start..img_end]
            else
                p "There were no h1 tags on #{link}/#{zip_code}"           
            end
           rescue
            puts "You typed somrthing wrong. Please try again."
           end

    end
end