const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const newWorkoutRoutes = require('./new-workouts.js');
const workoutRoutes = require('./workout-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/new-workout', newWorkoutRoutes);
router.use('/workout', workoutRoutes);

module.exports = router;
