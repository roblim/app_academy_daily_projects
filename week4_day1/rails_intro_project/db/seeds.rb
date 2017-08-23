# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(username: Faker::Internet.user_name)
user2 = User.create!(username: Faker::Internet.user_name)
user3 = User.create!(username: Faker::Internet.user_name)
user4 = User.create!(username: Faker::Internet.user_name)
user5 = User.create!(username: Faker::Internet.user_name)
user6 = User.create!(username: Faker::Internet.user_name)
user7 = User.create!(username: Faker::Internet.user_name)

artwork1 = Artwork.create!(title: Faker::Simpsons.location,
                           image_url: Faker::Internet.url,
                           artist_id: user1.id)
artwork2 = Artwork.create!(title: Faker::Simpsons.location,
                           image_url: Faker::Internet.url,
                           artist_id: user2.id)
artwork3 = Artwork.create!(title: Faker::Simpsons.location,
                           image_url: Faker::Internet.url,
                           artist_id: user3.id)
artwork4 = Artwork.create!(title: Faker::Simpsons.location,
                           image_url: Faker::Internet.url,
                           artist_id: user4.id)
artwork5 = Artwork.create!(title: Faker::Simpsons.location,
                           image_url: Faker::Internet.url,
                           artist_id: user5.id)
artwork6 = Artwork.create!(title: Faker::Simpsons.location,
                           image_url: Faker::Internet.url,
                           artist_id: user6.id)
artwork7 = Artwork.create!(title: Faker::Simpsons.location,
                           image_url: Faker::Internet.url,
                           artist_id: user7.id)

share1 = ArtworkShare.create!(artwork_id: 1, viewer_id: user2.id)
share2 = ArtworkShare.create!(artwork_id: 2, viewer_id: user3.id)
share3 = ArtworkShare.create!(artwork_id: 3, viewer_id: user4.id)
share4 = ArtworkShare.create!(artwork_id: 4, viewer_id: user5.id)
share5 = ArtworkShare.create!(artwork_id: 5, viewer_id: user6.id)
share6 = ArtworkShare.create!(artwork_id: 6, viewer_id: user7.id)
share7 = ArtworkShare.create!(artwork_id: 7, viewer_id: user1.id)

comment1 = Comment.create!(author_id: 1, artwork_id: 1, body: 'This is the best')
comment2 = Comment.create!(author_id: 2, artwork_id: 1, body: 'Blah blah blah')
comment3 = Comment.create!(author_id: 3, artwork_id: 1, body: 'Barf!!!!!')
comment4 = Comment.create!(author_id: 1, artwork_id: 4, body: 'Glarghhjjh!')
comment5 = Comment.create!(author_id: 1, artwork_id: 5, body: 'Cats are the best')
comment6 = Comment.create!(author_id: 6, artwork_id: 6, body: 'You suck')
comment7 = Comment.create!(author_id: 7, artwork_id: 7, body: 'Superb')
