const consoleBreak =
  "\n\n//////////////////////////////////////////////////////////////////////////////////////////////////////////////////";

///////////////Menu Items (MVP)///////////////////

const latte = { name: "Cafe Latte", price: 4, category: "Drinks" };
const burger = { name: "Burger", price: 18, category: "Lunch" };
const breakfastBurrito = {
  name: "Breakfast Burrito",
  price: 16,
  category: "Breakfast",
};

/**********************************************************
 * FINISHED
 */
/* Task 1a: write a function to return more menu items with the same format as the items above. */

function createMenuItem(name, cost, category) {
  const newMenuItem = {
    name: name,
    cost: cost,
    category: category,
  };
  return newMenuItem;
}
/** TESTING createMenuItem()
 *
 */
console.log(consoleBreak);
console.log(`Invoking createMenuItem("Drip Coffee", 2, "Drinks")\n\n`);
console.log(createMenuItem("Drip Coffee", 2, "Drinks"));

/*****************************
 * FINISHED
 */
/* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */
const dripCoffee = createMenuItem("Drip Coffe", 2, "Drinks");
const pancakes = createMenuItem("Pancakes", 6, "Breakfast");
const avoToast = createMenuItem("Avocado Toast", 8, "Breakfast");
console.log(consoleBreak);
console.log(
  `Invoking createMenyItem() 3 times to create three variables——printing those variables now\n\n`
);
console.log(dripCoffee);
console.log(pancakes);
console.log(avoToast);

/**********************************************************
 * FINISHED
 */

/* Task 2: You're having a lunch special! 
  25% off for teachers and students, 
  10% off for everyone else. 
  Add a method to your burger object that automatically calculates price given a string as a parameter. 

Your method should accept: 

(1) A string (teacher, student, or public)

and should return a number. 

For example, burger.discount("teacher") would return 13.5 and burger.discount("public") would return 16.2*/
burger.discount = function (strCustomer) {
  if (typeof strCustomer !== "string") {
    console.log("given parameter must be a string!");
    return null;
  } else if (
    strCustomer !== "teacher" &&
    strCustomer !== "student" &&
    strCustomer !== "public"
  ) {
    console.log(
      "given param must be a string specifying type of customer: teacher, student, or public"
    );
    return null;
  }

  if (strCustomer === "student" || strCustomer === "teacher") {
    return this.price - this.price * 0.25;
  } else if (strCustomer === "public") {
    return this.price - this.price * 0.1;
  } else {
    // if this is reached... something is broken.
    console.log("SOMETHING IS BROKEN");
    return null;
  }
};
console.log(consoleBreak);
console.log(
  `Invoking burger.discount("teacher"), burger.discount("student"). burger.discount("public")\n\n`
);
console.log(burger.discount("teacher"));
console.log(burger.discount("student"));
console.log(burger.discount("public"));

///////////////Reviews (MVP)///////////////////

const reviews = [
  {
    name: "Daniela",
    rating: 5,
    feedback: "Beautiful atmosphere and wonderful vegan options!",
  },
  {
    name: "Jack",
    rating: 3,
    feedback:
      "A little too hipster for my taste, but the burger was decent, if overpriced",
  },
  { name: "Miranda", rating: 4, feedback: "fun trivia and cool vibes" },
  {
    name: "Wen",
    rating: 4.5,
    feedback:
      "I don't leave my house often, but when I do, it's for this place. Highly reccomend.",
  },
  {
    name: "Brett",
    rating: 3,
    feedback:
      "great selection of snacks and a nice cafe area to get work done during the day.",
  },
  {
    name: "Julius",
    rating: 2,
    feedback:
      "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it.",
  },
  {
    name: "Lauren",
    rating: 4,
    feedback:
      "Absolutely love that they have karaoke Fridays! Food and drink selection is okay.",
  },
  { name: "Reyna", rating: 3.5, feedback: "" },
];

/**********************************************************
 * FINISHED
 */
/* Task 3: Console.log just Julius' feedback */
console.log(consoleBreak);
console.log(`Logging ONLY Julius' feedback from the reviews array\n\n`);
console.log(reviews[5].feedback);

/* Task 4: Add a new rating with your (fictitious) opinions of the restaurant in the same format as the reviews above. */
reviews.push({
  name: "Chaz",
  rating: 4,
  feedback: "great food if someone else is paying!",
});
console.log(consoleBreak);
console.log(
  `Adding a new rating to the reviews array and printing said review\n\n`
);
console.log(reviews[reviews.length - 1]);

/* Task 5: Add the following feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays" */
reviews[7].feedback =
  "this place is chill with really cool people, great for getting work done on weekdays";
console.log(consoleBreak);
console.log(
  `Adding feedback to Reyna's rating within the reviews array. Printing Reyna's object to check that it worked!\n\n`
);
console.log(reviews[7]);

/*  Task 6: Write a function to return a review based on the index of the review in the array.

 Your function should take two arguments:

(1) an array which holds all of the reviews
(2) a number which is the desired index in the array.

and should return a string in the format `{name} gave the restaurant a {rating}, and their feedback was: {feedback}`
 * 
 * For example, if getReviewByIndex is invoked with reviews and the number 0
 * it will return `Daniela gave the restaurant a 5 star review and their feedback was: Beautiful atmosphere and wonderful vegan options!`
*/
function getReviewByIndex(reviews, index) {
  name = reviews[index].name;
  rating = reviews[index].rating;
  feedback = reviews[index].feedback;
  return `${name} gave the restaurant a ${rating}, and their feedback was: ${feedback}`;
}
console.log(consoleBreak);
console.log(
  `invoking getReviewByIndex(reviews, 7) and printing the returned value\n\n`
);
console.log(getReviewByIndex(reviews, 7));

/* Task 7: Write a function to get information about the most recent review called `getLastReview`

getLastReview should accept:
  (1) an array of objects 
  
and should return a string in the format `{name} gave the restaurant a {rating}, and their feedback was: {feedback}`

For example, if getLastReview is invoked passing the reviews array it will return `Reyna gave the restaurant a 3.5 star review and their feedback was: "this place is chill with really cool people, great for getting work done on weekdays"`.
*/
function getLastReview(arrReviews) {
  index = arrReviews.length - 1;
  name = reviews[index].name;
  rating = reviews[index].rating;
  feedback = reviews[index].feedback;
  return `${name} gave the restaurant a ${rating}, and their feedback was: ${feedback}`;
}
console.log(consoleBreak);
console.log(`Invoking getLastReview(reviews) and logging result\n\n`);
console.log(getLastReview(reviews));

///////////////🍔☕️🍽 STRETCH🍔☕️🍽////////////////////

/** STRETCH 1: Write a function called `getReviewByRating` that returns an array containing all reviews in a certain range. Your function should accept: 

  (1) An array of objects
  (2) A rating

  and should return an array of objects. 

  For example, invoking getReviewByRating(reviews, 4) would return [{name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."}]
*/

function getReviewByRating(arr, rating) {
  //  verify param data-types
  if (!Array.isArray(arr)) {
    console.log("arr parameter must be an array");
    return null;
  } else if (isNaN(rating)) {
    console.log("rating parameter must be given as a number!");
    return null;
  }

  const arrFiltered = [];
  for (let i = 0; i < arr.length; i++) {
    const review = arr[i];
    let currentRating = review.rating;
    if (currentRating >= rating && currentRating < rating + 1) {
      arrFiltered.push(review);
    }
  }
  return arrFiltered;
}
console.log(consoleBreak);
console.log(
  "Invoking getReviewByRating() multiple times with different params\n"
);
console.log("\n\n/////////getReviewByRating(reviews, 4)\n");
console.log(getReviewByRating(reviews, 4));

console.log("\n\n////////getReviewByRating(false, 4)\n");
console.log(getReviewByRating(false, 4));

console.log('\n\n////////getReviewByRating(reviews, "five"\n');
console.log(getReviewByRating(reviews, "five"));

/** STRETCH 2: Write a function called 'getLongestReview' that returns an array containing all reviews longer than 15 words. 
  
Your function should accept: 

  (1) An array of objects

and should return an array of objects. 

  For example, invoking getLongReviews(reviews) would return [
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." }]
*/
function getLongReviews(arr) {
  if (!Array.isArray(arr)) {
    console.log("arr param must be an array");
    return null;
  }
  const arrLongReviews = [];
  for (let i = 0; i < arr.length; i++) {
    const review = arr[i];
    const feedback = review.feedback;
    const numWords = feedback.split(" ");
    if (numWords.length > 15) {
      arrLongReviews.push(review);
    }
  }
  return arrLongReviews;
}

console.log(consoleBreak);
console.log(`Invoking getLongReviews(reviews) with various arguments\n\n`);

console.log("////// getLongReviews(reviews)\n");
console.log(getLongReviews(reviews));

console.log("\n///// getLongReviews(4)\n");
console.log(getLongReviews(4));

console.log("\n///// getLongReviews(false)\n");
console.log(getLongReviews(false));

/* STRETCH 3:  This challenge is not related to the data above! 

Write a function called carMarker 

Your function should accept:

(1) a single odometer argument (a number) 

and return an object.

The returned object should have the following characteristics:
     it has an `odometer` property that contains the argument passed in.
     it has a `drive` method that takes a distance as its argument, and
         (1) causes the odometer in the object to be increased by the distance,
         (2) returns the updated value of the `odometer`.
*/

// ORIGINAL carMaker function —— written without the use of a custom constructor function
function carMaker(odometer) {
  if (isNaN(odometer)) odometer = null;

  const car = {
    odometer: odometer,
    drive: function (distance) {
      if (isNaN(distance)) return null;
      this.odometer += distance;
      return this.odometer;
    },
  };
  return car;
}
console.log(consoleBreak);
console.log(
  `Invoking carMaker() to create a new car object instance; then invoking the car instance's drive function.\n\n`
);

const car1 = carMaker(212);
console.log(
  `\n///// Created const car1, a car object instance, by invoking carMaker(212): ${car1}`
);

console.log(`\n///// Log car1 info`);
console.log(car1);

console.log(`\n///// Invoke car1.drive(8) and log results`);
car1.drive(8);
console.log(car1);

// SECOND carMaker(odometer) function that utilizes my custom constructor function (below) as a helper (constructor function does all the work lol)
function carMaker2(odometer) {
  return new Car(odometer);
}
console.log(consoleBreak);
console.log(
  `Invoking carMaker2() to create a new car object instance——this method uses a custom constructor function as a helper. After car is constructed, I'm invoking the car instance's drive function.\n\n`
);

const car2 = carMaker2(100);
console.log(
  `\n///// Created const car2, a car object instance, by invoking carMaker2(100): ${car2}`
);
console.log(`\n///// Log car2 info`)
console.log(car2);
console.log(`\n///// Invoke car2.drive(50) and log results`)
car2.drive(50);
console.log(car2);


// CUSTOM CONSTRUCTOR FUNCTION (used as helper in carMaker2 function)
function Car(odometer) {
  if (isNaN(odometer)) odometer = null;
  this.odometer = odometer;
  this.drive = function (distance) {
    if (isNaN(distance)) return null;
    this.odometer += distance;
    return this.odometer;
  };
}
console.log(consoleBreak);
console.log(`Creating car3 (a new instance of a Car object) by using my custom constructor function.\n\n `)

const car3 = new Car(400);
console.log(`\n///// const car3 = new Car(400);`)
console.log(`\n///// Log car3 info`);
console.log(car3);
console.log(`\n///// Invoke car3.drive(20) and print results.`);
console.log(car3.drive(20));
console.log(`\n///// Log car3 info after method call`);
console.log(car3);