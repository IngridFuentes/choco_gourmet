# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Chocolate.destroy_all
Chocolate.create(name: 'Dark chocolate with almonds' , description: 'Dark chocolate with over 70% of cacao with a smooth flavour and almonds.' , price: 20)
Chocolate.create(name: 'Milk chocolate with nuts' , description: 'Milk chocolate with nuts. Sweet flavour for sweet people' , price: 10)
Chocolate.create(name: 'Dark chocolate with raisins' , description: 'Dark chocolate with over 80% of cacao. Nice touch of raisins.' , price: 18)
Chocolate.create(name: 'Dark chocolate with coconut' , description: 'Dark chocolate with over 75% of cacao with a touch of coconut.' , price: 25)
Chocolate.create(name: 'Milk chocolate' , description: 'Milk chocolate made with the best ingredients.' , price: 14)

Customer.create(name: "Sonia", email: "sonia@email.com")

Order.create(quantity: 1, total: 20, chocolate_id: 1, customer_id: 1)