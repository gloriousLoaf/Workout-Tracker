/* API Router */
const router = require('express').Router();
const db = require('../models');

/* GET Routes */
// Latest workout on initial load
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .sort({ $natural: -1 })
        .limit(1)
        .then(latest => {
            res.json(latest);
        })
        .catch(err => {
            res.json(err);
        });
});

// Stats Page
router.get('/api/workouts/range', (req, res) => {
    // find, range limited to recent week, decending
    db.Workout.find({})
        .sort({ _id: 1 })
        .limit(7)
        .populate("exercises")
        .then(lastWeek => {
            res.json(lastWeek);
        })
        .catch(err => {
            res.json(err);
        })
});

/* PUT Route - update by id */
router.put("/api/workouts/:id", ({ body, params }, res) => {
    // grab the workout by id and push new exercises
    db.Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
        .then((updateWorkout) => {
            res.json(updateWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

/* POST Route - new workout */
router.post('/api/workouts', (req, res) => {
    db.Workout.create({})
        .then(newWorkout => {
            res.json(newWorkout);
        })
        .catch(({ err }) => {
            res.json(err)
        })
});

module.exports = router;