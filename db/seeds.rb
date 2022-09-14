# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "🍕 seeding City ..."
Austin = City.create!(name: 'Austin', cet: 'AustinET')
Amarillo = City.create!(name: 'Amarillo', cet: 'AmarilloET')
Abilene = City.create!(name: 'Abilene', cet: 'AbileneET')
Dallas = City.create!(name: 'Dallas', cet: 'DallasET')
Fort_Worth = City.create!(name: 'Fort Worth', cet: 'Fort_WorthET')
Bryan = City.create!(name: 'Bryan', cet: 'BryanET')
College_Station = City.create!(name: 'College Station', cet: 'College_StationET')
El_Paso = City.create!(name: 'El Paso', cet: 'El_PasoET')
San_Angelo = City.create!(name: 'San Angelo', cet: 'San_AngeloET')
San_Antonio = City.create!(name: 'San Antonio', cet: 'San_AntonioET')
Houston = City.create!(name: 'Houston', cet: 'HoustonET')
Laredo = City.create!(name: 'Laredo', cet: 'LaredoET')
puts "🍕 City toast"


puts "🍕 seeding Cet..."
AustinET = Cet.create!(city: Austin, January: 1.2, February: 1.5, March: 2.9, April: 4.6, May: 6.6, June: 7.9, July: 8.7, August: 8.2, September: 6.2, October: 4.3, November: 2.1, December: 1.4)
AmarilloET = Cet.create!(city: Amarillo, January: 0.4, February: 0.7, March: 1.5, April: 3, May: 5, June: 7, July: 7.8, August: 7, September: 4.8, October: 2.8, November: 1.1, December: 0.6)
AbileneET = Cet.create!(city: Abilene, January: 0.6, February: 9, March: 1.9, April: 3.8, May: 5.7, June: 7.8, July: 8.7, August: 8.1, September: 5.5, October: 3.3, November: 1.4, December: 0.8)
DallasET = Cet.create!(city: Dallas, January: 0.7, February: 1, March: 2.2, April: 3.9, May: 6, June: 7.8, July: 8.8, August: 8.3, September: 5.8, October: 3.7, November: 1.6, December: 1)
Fort_WorthET = Cet.create!(city: Fort_Worth, January: 0.7, February: 1, March: 2.2, April: 3.9, May: 6, June: 7.8, July: 8.8, August: 8.3, September: 5.8, October: 3.7, November: 1.6, December: 1)
BryanET = Cet.create!(city: Bryan, January: 0.9, February: 1.2, March: 2.4, April: 4, May: 6, June: 7.6, July: 8.4, August: 7.9, September: 5.6, October: 3.7, November: 1.7, December: 1)
College_StationET = Cet.create!(city: College_Station, January: 0.9, February: 1.2, March: 2.4, April: 4, May: 6, June: 7.6, July: 8.4, August: 7.9, September: 5.6, October: 3.7, November: 1.7, December: 1)
El_PasoET = Cet.create!(city: El_Paso, January: 0.8, February: 1.1, March: 2.2, April: 3.8, May: 5.8, June: 7.5, July: 7.6, August: 7.1, September: 5.1, October: 3.4, November: 1.5, December: 0.9)
San_AngeloET = Cet.create!(city: San_Angelo, January: 0.9, February: 1.2, March: 2.5, April: 4, May: 6, June: 7.6, July: 8, August: 7.8, September: 5.7, October: 3.9, November: 1.8, December: 1.1)
San_AntonioET = Cet.create!(city: San_Antonio, January: 1.2, February: 1.5, March: 2.9, April: 4.6, May: 6.6, June: 7.9, July: 8.7, August: 8.2, September: 6.2, October: 4.3, November: 2.1, December: 1.4)
HoustonET = Cet.create!(city: Houston, January: 1.2, February: 1.5, March: 2.8, April: 4.5, May: 6.5, June: 7.8, July: 8.3, August: 7.85, September: 6.0, October: 4.3, November: 2.2, December: 1.4)
LaredoET = Cet.create!(city: Laredo, January: 1.3, February: 1.7, March: 3.3, April: 5.1, May: 7.1, June: 8.4, July: 9.1, August: 8.6, September: 6.5, October: 4.6, November: 2.4, December: 1.5)
puts "🍕 Cet toast"


puts "🍕 seeding User..."
# u1 = User.create!(email: 'JohnWaterfall@gmail.com', password: 'Grass1s@lways$er', city: Houston)
# u2 = User.create!(email: 'JohnWaterfall2@gmail.com', password: 'Grass1s@lways$er', city: Amarillo)
# u3 = User.create!(email: 'JohnWaterfall3@gmail.com', password: 'Grass1s@lways$er', city: Abilene)
# u4 = User.create!(email: 'JohnWaterfall4@gmail.com', password: 'Grass1s@lways$er', city: Dallas)
# u5 = User.create!(email: 'JohnWaterfall5@gmail.com', password: 'Grass1s@lways$er', city: Fort_Worth)
# u7 = User.create!(email: 'JohnWaterfall6@gmail.com', password: 'Grass1s@lways$er', city: Bryan)
# u8 = User.create!(email: 'JohnWaterfall7@gmail.com', password: 'Grass1s@lways$er', city: College_Station)
# u9 = User.create!(email: 'JohnWaterfall8@gmail.com', password: 'Grass1s@lways$er', city: El_Paso)
# u10 = User.create!(email: 'JohnWaterfal9l@gmail.com', password: 'Grass1s@lways$er', city: San_Angelo)
# u11 = User.create!(email: 'JohnWaterfall10@gmail.com', password: 'Grass1s@lways$er', city: San_Antonio)
# u12 = User.create!(email: 'JohnWaterfall11@gmail.com', password: 'Grass1s@lways$er', city: Houston)
# u13 = User.create!(email: 'JohnWaterfall12@gmail.com', password: 'Grass1s@lways$er', city: Laredo)
# u14 = User.create!(email: 'JohnWaterfall13@gmail.com', password: 'Grass1s@lways$er', city: Austin)

u1 = User.create!(email: 'JohnWaterfall@gmail.com', password: 'Grass1s@lways$er', city: Houston, userCity: "Houston")
u2 = User.create!(email: 'JohnWaterfall2@gmail.com', password: 'Grass1s@lways$er', city: Amarillo, userCity: "Amarillo")
u3 = User.create!(email: 'JohnWaterfall3@gmail.com', password: 'Grass1s@lways$er', city: Abilene, userCity: "Abilene")
u4 = User.create!(email: 'JohnWaterfall4@gmail.com', password: 'Grass1s@lways$er', city: Dallas, userCity: "Dallas")
u5 = User.create!(email: 'JohnWaterfall5@gmail.com', password: 'Grass1s@lways$er', city: Fort_Worth, userCity: "Fort_Worth")
u7 = User.create!(email: 'JohnWaterfall6@gmail.com', password: 'Grass1s@lways$er', city: Bryan, userCity: "Bryan")
u8 = User.create!(email: 'JohnWaterfall7@gmail.com', password: 'Grass1s@lways$er', city: College_Station, userCity: "College_Station")
u9 = User.create!(email: 'JohnWaterfall8@gmail.com', password: 'Grass1s@lways$er', city: El_Paso, userCity: "El_Paso")
u10 = User.create!(email: 'JohnWaterfal9l@gmail.com', password: 'Grass1s@lways$er', city: San_Angelo, userCity: "San_Angelo")
u11 = User.create!(email: 'JohnWaterfall10@gmail.com', password: 'Grass1s@lways$er', city: San_Antonio, userCity: "San_Antonio")
u12 = User.create!(email: 'JohnWaterfall11@gmail.com', password: 'Grass1s@lways$er', city: Houston, userCity: "Houston")
u13 = User.create!(email: 'JohnWaterfall12@gmail.com', password: 'Grass1s@lways$er', city: Laredo, userCity: "Laredo")
u14 = User.create!(email: 'JohnWaterfall13@gmail.com', password: 'Grass1s@lways$er', city: Austin, userCity: "Austin")


puts "🍕 Users toast..."




