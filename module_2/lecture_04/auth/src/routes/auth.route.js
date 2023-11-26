const router = require('express').Router();
const authController = require('../controllers/auth.controller');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.use((req, res) => {
    res.status(404).send('Path not found. Wrong path.');
});

module.exports = router;