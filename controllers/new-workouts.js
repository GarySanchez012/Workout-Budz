const router = require("express").Router();
const axios = require("axios").default;

const sequelize = require("../config/connection");
const { Workout, User } = require("../models");
const withAuth = require("../utils/auth");

// get all posts for dashboard
router.get("/", withAuth, (req, res) => {
  console.log(req.session);
  console.log("======================");

  const workoutPromise = Workout.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "user_id", "title", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  });

  options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises",
    headers: {
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      "x-rapidapi-key": "cbc9fd7adamsh96d9cb7275356fdp1c3be7jsnb042cd7c36b8",
    },
  };
  const exercisesPromise = axios.request(options);

  Promise.all([workoutPromise, exercisesPromise])
    .then((WorkoutsAndExercises) => {
      const dbWorkoutData = WorkoutsAndExercises[0];
      const exercises = WorkoutsAndExercises[1];

      function getRandom(arr, n) {
        var result = new Array(n),
          len = arr.length,
          taken = new Array(len);
        if (n > len)
          throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
          var x = Math.floor(Math.random() * len);
          result[n] = arr[x in taken ? taken[x] : x];
          taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
      }

      // const firstFive = response.data.slice(0, 5);

      const randomFive = getRandom(exercises.data, 5);
      const workouts = dbWorkoutData.map((workout) =>
        workout.get({ plain: true })
      );

      res.render("new-workout", {
        exercises: randomFive,
        workouts,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
