# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: 'user1')
user2 = User.create(username: 'user2')
user3 = User.create(username: 'user3')

poll1 = Poll.create(author_id: user1.id,
                    title:     'Beverage Preferences')

q1 = Question.create(poll_id: poll1.id,
                     text:    'Which of these beverages do you like best?')

ac1 = AnswerChoice.create(question_id: q1.id,
                          text:        'Coffee')

ac2 = AnswerChoice.create(question_id: q1.id,
                          text:        'Coke')

ac3 = AnswerChoice.create(question_id: q1.id,
                          text:        'Tea')

ac4 = AnswerChoice.create(question_id: q1.id,
                          text:        'Water')

ac5 = AnswerChoice.create(question_id: q1.id,
                          text:        'Milk')

response1 = Response.create(user_id:   user2.id,
                            answer_id: ac1.id)

response2 = Response.create(user_id:   user3.id,
                            answer_id: ac3.id)
