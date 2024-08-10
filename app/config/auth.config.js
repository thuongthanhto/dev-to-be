const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('devto', 'root', '07032002', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;



module.exports = {
  secret: "bezkoder-secret-key"
};