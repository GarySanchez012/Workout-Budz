const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
<<<<<<< HEAD
=======
const newWorkoutRoutes = require('./new-workouts.js');
const workoutRoutes = require('./workout-routes.js');
>>>>>>> 35910b69a61e67c169645ccca2cb9515131bf107

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
<<<<<<< HEAD
=======
router.use('/new-workout', newWorkoutRoutes);
router.use('/workout', workoutRoutes);
>>>>>>> 35910b69a61e67c169645ccca2cb9515131bf107

module.exports = router;
