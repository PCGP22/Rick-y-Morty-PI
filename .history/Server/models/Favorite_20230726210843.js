const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: DataTypes.NUMBER,
      name: DataTypes.STRING,
      status: DataTypes.STRING
   }, 
   { 
      timestamps: false 
   });
};
