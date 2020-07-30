/* API Router */
const router = require('express').Router();
const db = require('../models');

/* GET Routes */
// Latest workout on initial load - CAN'T get duration to populate :(
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .sort({ day: -1 })
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
    // is this where I am messing up the duration????
    db.Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }, { useFindAndModify: false })
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