const Gods = require('../models/Gods');
const uuid = require('uuid');

module.exports = {
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
