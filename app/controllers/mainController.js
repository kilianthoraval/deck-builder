const dataMapper = require('../dataMapper.js');

const mainController = {
  homePage: async (req, res) => {
    try {
      const cards = await dataMapper.getAllCards();
      res.render('cardList', {
        cards,
        title: 'Liste des cartes'
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  // étape 1 : RÉCUPÉRATION D'UNE CARTE

  cardPage: async (req, res) => {
    const cardID = req.params.id;
    const card = await dataMapper.getCard(cardID);
 
    if (card) {
       
        res.render("card", {
            card
        });
    }
    else {
        res.status(500).render("500");
    }
},

  // ÉTAPE 3 : CRÉATION DU DECK

  // addToDeck: (req, res) => {

  // }
};

module.exports = mainController;
