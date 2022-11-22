const dataMapper = require('../dataMapper.js');

const searchController = {
  searchPage: async(req, res) => {
     await dataMapper.searchElement();
    res.render('search');
  },
  searchByElement :  async(req, res) => {
    await dataMapper.searchElement();
   res.render('element');

}
};

module.exports = searchController;