const db = require('./index.js');
const Review = require('./Review.js');
const faker = require('faker');

let randomName = faker.name.findName();

let firstName = randomName => {
  var first = randomName.split(' ');
  return first[0];
}

const sampleReviews = [
  {
    firstName: firstName(randomName),
    date: 'June 1st',
    ratings: [0, 0, 0, 0, 0, 0],
    comment: 'Awesome host!'
  }
]

const insertSampleReviews = function() {
  Review.create(sampleReviews)
    .then(() => { // can use this because of promise
      console.log('SEEDING SUCCESS');
      db.close();
    })
    .catch(() => {
      console.log('ERROR');
      db.close();
    });
};

insertSampleReviews();