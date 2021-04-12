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

      const godFind = await Gods.findByPk(god);
      
      if (!godFind)
        return res.status(404).json({ error: 'god not found' });

      const newType = await WarriorTypes.create({
        god_id: god,
        class_name: name
      });

      return res.json(newType);
    
  },
  async remove(req, res) {
    const { god } = req.params;
    const { name } = req.body;

    const godFind = await Gods.findByPk(god);
    
    if (!godFind)
      return res.status(404).json({ error: 'god not found' });

    const warriorType = await WarriorTypes.findOne({
     where:{ god_id: god, class_name: name}
    });

    await warriorType.destroy();

    return res.status(204).json();
  },
};
