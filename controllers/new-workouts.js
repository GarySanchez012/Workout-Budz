const router = require('express').Router();
const axios = require("axios").default;

const sequelize = require('../config/connection');
const { Workout, User } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Workout.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'user_id',
      'title',
      'created_at',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbWorkoutData => {
      const workouts = dbWorkoutData.map(workout => workout.get({ plain: true }));
      res.render('new-workout', { workouts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// render the page for creating a new workout
router.get('/new-workout', (req,res) => {

  // utility functiuon for getting a number of random exercises
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

  var options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      'x-rapidapi-key': 'cbc9fd7adamsh96d9cb7275356fdp1c3be7jsnb042cd7c36b8'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);

    const randomFive = getRandom(response.data, 5);

    res.render('new-workout', {
      exercises: randomFive
    })

  }).catch(function (error) {
    console.error(error);
  });
})

module.exports = router;
