const router = require("express").Router();
const axios = require("axios").default;

const sequelize = require("../config/connection");
const { Workout, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/:id", withAuth, (req, res) => {
    Workout.findOne({
        where: {
            user_id: req.session.user_id,
            id: req.params.id
          },
          attributes: ["id", "user_id", "title", "exercises", "created_at"],
          include: [
            {
              model: User,
              attributes: ["username"],
            },
          ],
    })
    .then(workout => {
        if (!workout) {
            res.status(404).json({ message: 'No workout found with this id' });
            return;
          }


          res.render("workout-post", {
              title: workout.title,
              exercises: JSON.parse(workout.exercises),
              loggedIn: true
          })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });

})

module.exports = router;