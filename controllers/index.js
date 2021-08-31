const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const workoutRoutes = require('./new-workouts.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/new-workout', workoutRoutes);

module.exports = router;
