const Gods = require('../models/Gods');

module.exports = {
  async index(req, res) {
    const allGods = await Gods.findAll({
      attributes: ['id','name', 'human_name', 'date_of_birth', 'responsible_for', 'resume']
    });

    return res.json({listGods: allGods});
  },

	async store(req, res) {
		try {
			
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
			
			return res.status(201).json(newGod);
		} catch (e) {
			console.error(JSON.stringify(e));
			return res.status(500).json();
		}
	},
	async get(req, res) {
		try {
			const { god } = req.params;
	
			const godFind = await Gods.findByPk(god);
			
			if (!godFind)
				return res.status(404).json({ error: 'god not found' });
			
	
			return res.status(200).json(godFind);
		} catch (e) {
			console.error(JSON.stringify(e));
			return res.status(500).json();
		}

  },
	async remove(req, res) {
		try {
			const { god } = req.params;
	
			const godFind = await Gods.findByPk(god);
			
			if (!godFind)
				return res.status(404).json({ error: 'god not found' });
			
			await godFind.destroy();
	
			return res.status(204).json();
		} catch (e) {
			console.error(JSON.stringify(e));
			return res.status(500).json();
		}

  },
};
