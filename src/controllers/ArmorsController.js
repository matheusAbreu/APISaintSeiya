const Armors = require('../models/Armors');
const WarriorTypes = require('../models/WarriorTypes');
const { index, store } = require('./GodsController');

module.exports = {
    async index(req, res) {
        const allArmors = await Armors.findAll({ attributes: ['id', 'version', 'resume', 'images'] });

        return res.json(allArmors);
    },
    async store(req, res) {
        const { warriorTypeId } = req.params;
        const { version, resume, images } = req.body;
  
        if (!version)
            return res.status(406).json({error: 'It is necessary to specify the version of the armor'})

        const wTypeFind = await WarriorTypes.findByPk(warriorTypeId);
        
        if (!wTypeFind)
          return res.status(404).json({ error: 'warrior type not found' });
  
        const newType = await WarriorTypes.create({
            warrior_type_id: warriorTypeId,
            version, resume, images
        });
  
        return res.json(newType);
      
    },
};
