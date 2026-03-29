const { Sequelize } = require('sequelize');
require('dotenv').config()


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, 'process.env.DB_PASSWORD', {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
});

module.exports = sequelize

// class Student {

//     constructor(name,age,gender){
//         this.name = name
//         this.age = age
//         this.gender = gender
//     }

// }

// let s1 = new Student('ali',18,'male')
// let s2 = new Student('ahmed',18,'male')
// let s3 = new Student('kamran',18,'male')