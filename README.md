# Project 1

## Sequelize Script

npx sequelize-cli model:generate --name vehicle --attributes name:string,brand:string,price:integer,image:string

npx sequelize-cli model:generate --name customer --attributes name:string,address:string

npx sequelize-cli model:generate --name vehicle_customer --attributes id_vehicle:integer,id_customer:integer
