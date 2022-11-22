const database = require('./database');

const dataMapper = {
  async getAllCards() {
    const query = "SELECT * FROM card";
    const result = await database.query(query);
    return result.rows;
  },

  async getCard(id){
    const sqlQuery = `SELECT * FROM card WHERE id=${id};`;

    let result;
    try {
        const sqlResult = await database.query(sqlQuery);
        result = sqlResult.rows[0];
    }
    catch (error) {
        console.error(error);
    }
    return result;

}

};


module.exports = dataMapper;
