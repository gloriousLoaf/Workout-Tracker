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
            /* THIS!!! wtf? see console on index.html / 'Last Workout' page,
                database is definitely capturing it, API is sending it, but something
                maybe in the prewritten material is just not rendering it */
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
});


const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;