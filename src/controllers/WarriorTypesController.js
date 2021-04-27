const WarriorTypes = require('../models/WarriorTypes');
const Gods = require('../models/Gods');

module.exports = {
  async index(req, res) {
    const allWTypes = await WarriorTypes.findAll({
      attributes: ['id', 'class_name', 'god_id']
    });

    return res.json(allWTypes);
  },
  async indexSelectedGod(req, res) {
    const { god } = req.params;

    const warriorsGod = await Gods.findByPk(god, {
      attributes: ['id', 'name', 'human_name', 'responsible_for'],
      include: { association: 'myWarriors', attributes: ['id', 'class_name'] }
    });

    if (!warriorsGod)
      return res.status(404).json({ error: 'god not found' });

    return res.json(warriorsGod);
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
    const { id } = req.params;

    const warriorType = await WarriorTypes.findByPk(id);
    
    if (!warriorType)
      return res.status(404).json({ error: 'warrior type not found' });

    await warriorType.destroy();

    return res.status(204).json();
  },
  async removeSelectedGod(req, res) {
    const { god } = req.params;
    const { name } = req.body;

    const godFind = await Gods.findByPk(god);
    
    if (!godFind)
      return res.status(404).json({ error: 'god not found' });

    const warriorType = await WarriorTypes.findOne({
     where:{ god_id: god, name}
    });

    await warriorType.destroy();

    return res.status(204).json();
  },
};
