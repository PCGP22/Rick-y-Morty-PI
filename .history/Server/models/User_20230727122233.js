const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type:DataTypes.NUMBER,
      primaryKey: true},
      email: DataTypes.STRING,
      password: DataTypes.STRING
   }, 
   { 
      timestamps: false 
   });
};
