# Project 1

## Sequelize Script

npx sequelize-cli model:generate --name vehicles --attributes name:string,brand:string,price:integer

npx sequelize-cli model:generate --name customers --attributes name:string,address:string

npx sequelize-cli model:generate --name vehicles_customers --attributes id_vehicle:integer,id_customer:integer
