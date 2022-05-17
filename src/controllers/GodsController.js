const Gods = require('../models/Gods');

module.exports = {
  async index(req, res) {
    const allGods = await Gods.findAll({
      attributes: ['id','name', 'human_name', 'date_of_birth', 'responsible_for', 'resume', 'images']
    });

    return res.json(allGods);
  },

  async store(req, res) {
    const {
      name,
      human_name,
      date_of_birth,
      responsible_for,
      resume
    } = req.body;

    const newGod = await Gods.create({
      name,
      human_name,
      date_of_birth,
      responsible_for,
      resume
    });

    return res.json(newGod);
  },
  async remove(req, res) {
    const { god } = req.params;

    const godFind = await Gods.findByPk(god);
    
    if (!godFind)
      return res.status(404).json({ error: 'god not found' });
    
    await godFind.destroy();

    return res.status(204).json();

  },
};
