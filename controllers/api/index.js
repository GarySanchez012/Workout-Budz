const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
<<<<<<< HEAD
=======
const workoutRoutes = require("./workout-routes");
>>>>>>> 35910b69a61e67c169645ccca2cb9515131bf107

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
<<<<<<< HEAD
=======
router.use("/workouts", workoutRoutes);
>>>>>>> 35910b69a61e67c169645ccca2cb9515131bf107

module.exports = router;
