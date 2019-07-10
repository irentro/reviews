const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.connect('mongodb://localhost/reviews');
mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
    firstName: String,
    date: String,
    ratings: [Number],
    comment: String
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;