// import all models
const Post = require('./Post');
const User = require('./User');
<<<<<<< HEAD
const Vote = require('./Vote');
const Comment = require('./Comment');
=======
const Comment = require('./Comment');
const Workout = require('./Workout');
>>>>>>> 35910b69a61e67c169645ccca2cb9515131bf107

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

<<<<<<< HEAD
User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

Vote.belongsTo(User, {
=======
Workout.belongsTo(User, {
>>>>>>> 35910b69a61e67c169645ccca2cb9515131bf107
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

<<<<<<< HEAD
Vote.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Post.hasMany(Vote, {
  foreignKey: 'post_id'
});

=======
User.hasMany(Workout, {
  foreignKey: 'user_id'
});

>>>>>>> 35910b69a61e67c169645ccca2cb9515131bf107
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

<<<<<<< HEAD
module.exports = { User, Post, Vote, Comment };
=======
module.exports = { User, Post, Comment, Workout };
>>>>>>> 35910b69a61e67c169645ccca2cb9515131bf107
