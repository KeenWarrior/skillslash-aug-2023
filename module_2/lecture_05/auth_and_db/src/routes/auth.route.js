const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const { registerValidator, loginValidator } = require('../validators/auth.validator');

router.post('/register', registerValidator, authController.register);
router.post('/login', loginValidator, authController.login);
router.post('/logout', authController.logout);

router.use((req, res) => {
    res.status(404).send('Path not found. Wrong path.');
});

module.exports = router;