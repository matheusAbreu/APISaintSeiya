const WarriorTypes = require('../models/WarriorTypes');
const Gods = require('../models/Gods');

module.exports = {
  async index(req, res) {
    const allWTypes = await WarriorTypes.findAll();

    return res.json(allWTypes);
  },

    async store(req, res) {
        const { god } = req.params;
        const { name } = req.body;

        console.log({god })
        const godFind = await Gods.findByPk(god);
        console.log({godFind})
        if (!godFind)
          return res.status(404).json({ error: 'god not found' });

      const newType = await WarriorTypes.create({
        god_id: god,
        class_name: name
      });

      return res.json(newType);
    
  },
};
