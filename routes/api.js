/* API Router */
const router = require('express').Router();
const Workout = require('../models/workout.js');
const Exercise = require('../models/exercise.js');

/* GET Routes */
// Latest workout on initial load
router.get("/api/workouts", (req, res) => {
    Workout.find({}).sort({ day: -1 })
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
    // find limited to recent week, decending
    Workout.find({})
        .sort({ _id: -1 })
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
router.put('/api/workouts/:id', ({ body, params }, res) => {
    Exercise.create(body)
        .then(({ _id }) =>
            Workout.findByIdAndUpdate(params.id, { $push: { exercises: _id } }, { new: true })
        )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
});

/* POST Route - new workout */
router.post('/api/workouts', (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(({ err }) => {
            res.json(err)
        })
});

module.exports = router;