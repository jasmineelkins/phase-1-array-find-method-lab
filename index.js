// code your solution here
// Let's create a function that uses the method `find()` to single out a specific
// result in game record data for the Denver Broncos football team. We want to
// find out if, at _any_ point in the team's existence, they've had a win in the
// Superbowl. Our data looks like this:

// ```js
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];
// ```

// Write a function called `superbowlWin()` in `index.js`:

// * The function should receive 1 argument, an `Array` of JavaScript `Object`s
// * Each object has two properties: `year` and `result`
// * It should use `find()` to test each `Object` to see if the `result` is `"W"` —
//   a win!
// * It should return the `year` when the win occurred (if it occurred at all!)
// * If no win is found, it should return, sadly, `undefined`

const superbowlWin = function (arr) {
  //   let year;

  //   let obj = arr.find((o) => {
  //     if (o.result === "W") {
  //       year = o.year;
  //       return year;
  //     }
  //   });

  let obj = arr.find((o) => o.result === "W");

  //   if (obj) {
  //     return obj.year;
  //   }

  return obj ? obj.year : undefined;
};

superbowlWin(record);
