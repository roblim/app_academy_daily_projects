# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# id          :integer          not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null


# id         :integer          not null, primary key
#  cat_id     :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           default("PENDING"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
cat1 = Cat.create!(birth_date: Faker::Date.birthday,
                   color: "black",
                   name: Faker::Name.name,
                   sex: "M",
                   description: Faker::Lorem.paragraph)
cat2 = Cat.create!(birth_date: Faker::Date.birthday,
                   color: "black",
                   name: Faker::Name.name,
                   sex: "F",
                   description: Faker::Lorem.paragraph)
cat3 = Cat.create!(birth_date: Faker::Date.birthday,
                   color: "black",
                   name: Faker::Name.name,
                   sex: "M",
                   description: Faker::Lorem.paragraph)
cat4 = Cat.create!(birth_date: Faker::Date.birthday,
                   color: "black",
                   name: Faker::Name.name,
                   sex: "M",
                   description: Faker::Lorem.paragraph)
cat5 = Cat.create!(birth_date: Faker::Date.birthday,
                   color: "black",
                   name: Faker::Name.name,
                   sex: "F",
                   description: Faker::Lorem.paragraph)
cat6 = Cat.create!(birth_date: Faker::Date.birthday,
                   color: "black",
                   name: Faker::Name.name,
                   sex: "M",
                   description: Faker::Lorem.paragraph)

rental1 = CatRentalRequest.create!(cat_id: 1, start_date: "2017-08-10", end_date: "2017-08-20", status: "PENDING")
rental2 = CatRentalRequest.create!(cat_id: 1, start_date: "2017-08-12", end_date: "2017-08-22", status: "PENDING")
rental3 = CatRentalRequest.create!(cat_id: 1, start_date: "2017-09-10", end_date: "2017-09-20", status: "PENDING")
