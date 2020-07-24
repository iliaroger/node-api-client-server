const db = require('../database');
const sql = require('mssql');

module.exports = (req, res) => {
  sql.connect(db.config, (err) => {
    if (err) throw err;
    const request = new sql.Request();
    request.query('SELECT * FROM comments', (err, recordset) => {
      if (err) throw err;
      return res.send(recordset.recordset);
    });
  });
};
