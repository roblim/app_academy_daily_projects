# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

TagTopic.create([
  {topic_name: "news"},
  {topic_name: "gossip"},
  {topic_name: "computers"},
  {topic_name: "europe"},
  {topic_name: "americas"},
  {topic_name: "everything_else"}
  ])


Tagging.create([
{topic_id: 1, shortened_url_id: 1}
])
