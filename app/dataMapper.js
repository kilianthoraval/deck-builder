const database = require('./database');

const dataMapper = {
  async getAllCards() {
    const query = "SELECT * FROM card";
    const result = await database.query(query);
    return result.rows;
  },


  // étape 1 : RÉCUPÉRATION D'UNE CARTE

  async getCard(id){
    const query = `SELECT * FROM card WHERE id=${id};`;

    let result;
    try {
        const sqlResult = await database.query(query);
        result = sqlResult.rows[0];
    }
    catch (error) {
        console.error(error);
    }
    return result;

},

  // ÉTAPE 2 : RECHERCHE PAR ÉLÉMENT

  async searchElement() {
    const query = `SELECT * FROM card WHERE element IS NOT NULL`;
    let result;
    try {
        const sqlResult = await database.query(query);
        result = sqlResult.rows[0];
    }
    catch (error) {
        console.error(error);
    }
    return result;
  }

};


module.exports = dataMapper;
