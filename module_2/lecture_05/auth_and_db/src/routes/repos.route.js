const router = require('express').Router();
const reposController = require('../controllers/repos.controller');
const auth = require('../middlewares/auth.middleware');

router.get('/', auth, reposController.getAllRepos);
router.get('/:id', reposController.getRepoById);
router.post('/', auth, reposController.createRepo);
router.put('/:id', auth, reposController.updateRepo);
router.delete('/:id',auth,  reposController.deleteRepo);

router.use((req, res) => {
    res.status(404).send('Path not found. Wrong path.');
});

module.exports = router;