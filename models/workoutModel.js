// Workout Model - all models exported by index.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now(),
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: true
            },
            name: {
                type: String,
                trim: true,
                required: true
            },
            distance: {
                type: Number,
                trim: true,
                required: true
            },
            // captured for every exercise, processed in virtual below
            duration: {
                type: Number,
                trim: true,
                required: true
            },
            weight: {
                type: Number,
                trim: true,
                required: true
            },
            sets: {
                type: Number,
                trim: true,
                required: true
            },
            reps: {
                type: Number,
                trim: true,
                required: true
            }
        }
    ]
},
{
    // still researching how this actually works!
    toJSON: {
        virtuals: true
    }
});

// dynamic property for 'const lastWorkout' in public/workout.js
WorkoutSchema.virtual('totalDuration').get(function () {
    // reduce array to sum of all exercise durations
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;