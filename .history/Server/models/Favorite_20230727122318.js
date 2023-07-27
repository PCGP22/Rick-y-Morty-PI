const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.NUMBER,
         primaryKey: true
      },
      name: DataTypes.STRING,
      status: DataTypes.STRING
   }, 
   { 
      timestamps: false 
   });
};
