const WarriorTypes = require('../models/WarriorTypes');

module.exports = {
  async index(req, res) {
    const allWTypes = await WarriorTypes.findAll();

    return res.json(allWTypes);
  },

    async store(req, res) {
        const { god_id } = req.params;
        const { name } = req.body;

        const god = await User.findByPk(god_id);
        console.log({god})
        if (!god)
          return res.status(404).json({ error: 'god not found' });

      const newType = await WarriorTypes.create({
        god_id,
        name
      });

      return res.json(newType);
    
  },
};
