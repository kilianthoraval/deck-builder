const dataMapper = require('../dataMapper.js');

const searchController = {
  searchPage: async(req, res) => {
     await dataMapper.searchElement();
    res.render('search');
  },
  searchByElement :  async(req, res) => {
    const cardElement = req.query;
    await dataMapper.searchElement(cardElement);
   res.render('element',{
    cardElement
   });

}
};

module.exports = searchController;