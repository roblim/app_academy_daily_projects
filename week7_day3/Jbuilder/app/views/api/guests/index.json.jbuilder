json.array! @guests do |guest|
  json.partial! 'api/guests/guest', guest: guest if (guest.age < 50 && guest.age > 40)
end
