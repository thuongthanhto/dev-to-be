module.exports = {
  db_host: process.env.DB_HOST,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_name: process.env.DB_NAME,
  db_dialect: process.env.DB_DIALECT,
  db_port: process.env.DB_PORT,
  db_pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};