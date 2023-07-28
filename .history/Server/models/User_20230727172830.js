const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type:DataTypes.INTEGER,
         primaryKey: true
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING
   }, 
   { 
      timestamps: false 
   });
};
