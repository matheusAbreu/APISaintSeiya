const Gods = require('../models/Gods');

module.exports = {
  async index(req, res) {
    const allGods = await Gods.findAll();

    return res.json(allGods);
  },

  async store(req, res) {
    const {
      name,
      human_name,
      date_of_birth,
      responsible_for,
      resume,
      images
    } = req.body;

    const newGod = await Gods.create({
      name,
      human_name,
      date_of_birth,
      responsible_for,
      resume,
      images
    });

    return res.json(newGod);
  },
};
