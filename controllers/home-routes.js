const router = require('express').Router();
const sequelize = require('../config/connection');
<<<<<<< HEAD
const { Post, User, Comment, Vote } = require('../models');
=======
const { Workout, User, Comment } = require('../models');
>>>>>>> 35910b69a61e67c169645ccca2cb9515131bf107

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');
<<<<<<< HEAD
  Post.findAll({
    attributes: [
      'id',
      'post_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
=======
  Workout.findAll({
    attributes: [
      'id',
      'user_id',
      'title',
      'created_at',
    ],
    include: [
      {
>>>>>>> 35910b69a61e67c169645ccca2cb9515131bf107
        model: User,
        attributes: ['username']
      }
    ]
  })
<<<<<<< HEAD
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));

      res.render('homepage', {
        posts,
=======
    .then(dbWorkoutData => {
      const workouts = dbWorkoutData.map(workout => workout.get({ plain: true }));

      res.render('homepage', {
        workouts,
>>>>>>> 35910b69a61e67c169645ccca2cb9515131bf107
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
<<<<<<< HEAD
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'post_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
=======
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
>>>>>>> 35910b69a61e67c169645ccca2cb9515131bf107
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
