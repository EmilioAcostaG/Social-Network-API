const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong router'));

// GET all users
router.get('/users', (req, res) => {
  res.send('Get all users')
})



module.exports = router;