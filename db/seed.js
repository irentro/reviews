const db = require('./index.js');
const Review = require('./Review.js');
const faker = require('faker');

let year = () => {
  let y = faker.date.past().toString().split(' ');
  return y[3];
}

let monthYear = faker.date.month() + ' ' + year();

let rating = () => {
  let result = [];
  
  for (let i = 0; i < 6; i++) {
    result.push(faker.random.number({min: 3, max: 5}));
  }
  
  return result;
};

const sampleReviews = () => {
  let reviews = [];
  let review = {
    firstName: faker.name.firstName(),
    date: monthYear,
    ratings: rating(),
    comment: faker.lorem.paragraph()
  }

  for (let i = 0; i < 100; i++) {
    reviews[i] = review;
  }

  return reviews;
}

const insertSampleReviews = function() {
  Review.create(sampleReviews())
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