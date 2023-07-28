const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true
      },
      name: DataTypes.STRING,
      status: DataTypes.STRING
   }, 
   { 
      timestamps: false 
   });
};
