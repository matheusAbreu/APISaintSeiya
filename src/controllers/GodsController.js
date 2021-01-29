const Gods = require('../models/Gods');

module.exports = {
  async store(req, res) {
    const {
      name,
      human_name,
      date_of_birth,
      responsible,
      description,
    } = req.body;

    const newGod = await Gods.create({
      name,
      human_name,
      date_of_birth,
      responsible,
      description,
    });

    return res.json(newGod);
  },
};
