const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const workoutRoutes = require("./workout-routes");

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use("/workouts", workoutRoutes);

module.exports = router;
