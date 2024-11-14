import Sequelize from "sequelize";

const practicasDB = new Sequelize('practicas', 'postgres', 'compensar1234', {
    host: 'db',
    dialect: 'postgres'
});

export default practicasDB;