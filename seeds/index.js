const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
<<<<<<< HEAD
const seedVotes = require('./vote-seeds');
=======
//const seedVotes = require('./vote-seeds');
>>>>>>> 35910b69a61e67c169645ccca2cb9515131bf107

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedPosts();
  console.log('--------------');

  await seedComments();
  console.log('--------------');

<<<<<<< HEAD
  await seedVotes();
  console.log('--------------');
=======

>>>>>>> 35910b69a61e67c169645ccca2cb9515131bf107

  process.exit(0);
};

seedAll();
