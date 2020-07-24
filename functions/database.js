require('dotenv').config();

const config = {
  user: 'Ilia',
  password: process.env.SQLDATABASEPW,
  server: 'server4api.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
  database: 'API-DB',
  options: {
    encrypt: true,
  },
};

module.exports = { config };
