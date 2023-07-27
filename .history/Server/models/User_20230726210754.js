const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: DataTypes.NUMBER,
      email: DataTypes.STRING,
      password: DataTypes.STRING
   }, 
   { 
      timestamps: false 
   });
};
