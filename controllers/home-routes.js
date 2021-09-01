const router = require('express').Router();
const sequelize = require('../config/connection');
const { Workout, User, Comment } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Workout.findAll({
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

      res.render('homepage', {
        workouts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get('/post/:id', (req, res) => {
  Workout.findOne({
    where: {
      id: req.params.id
    },
    // include: [
    //   {
    //     model: Comment,
    //     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //     include: {
    //       model: User,
    //       attributes: ['username']
    //     }
    //   },
    //   {
    //     model: User,
    //     attributes: ['username']
    //   }
    // ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
