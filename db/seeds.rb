# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(user_name: Faker::Name.name,
                    password_digest: BCrypt::Password.create('password'),
                    session_token: SecureRandom::urlsafe_base64(16)
                    )
user2 = User.create(user_name: Faker::Name.name,
                    password_digest: BCrypt::Password.create('password'),
                    session_token: SecureRandom::urlsafe_base64(16)
                    )
user3 = User.create(user_name: Faker::Name.name,
                    password_digest: BCrypt::Password.create('password'),
                    session_token: SecureRandom::urlsafe_base64(16)
                    )
user4 = User.create(user_name: Faker::Name.name,
                    password_digest: BCrypt::Password.create('password'),
                    session_token: SecureRandom::urlsafe_base64(16)
                    )


cat1 = Cat.create(birth_date: Faker::Date.birthday(18, 65),
                  color: "black",
                  name: Faker::Name.name,
                  sex: "M",
                  description: Faker::Lorem.paragraph
                  )
cat2 = Cat.create(birth_date: Faker::Date.birthday(18, 65),
                  color: "orange",
                  name: Faker::Name.name,
                  sex: "F",
                  description: Faker::Lorem.paragraph
                  )
cat3 = Cat.create(birth_date: Faker::Date.birthday(18, 65),
                  color: "brown",
                  name: Faker::Name.name,
                  sex: "M",
                  description: Faker::Lorem.paragraph
                  )
cat4 = Cat.create(birth_date: Faker::Date.birthday(18, 65),
                  color: "white",
                  name: Faker::Name.name,
                  sex: "M",
                  description: Faker::Lorem.paragraph
                  )
