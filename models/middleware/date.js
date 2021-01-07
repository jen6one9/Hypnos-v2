// Functions using Date.js for sleeps.js

// Calculate the pervious day and display it as a String
function calcDate() {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.toDateString();
  return yesterday;
}
// Validate that the user's toBed time is before rn
const rightNow = new Date();
// Calculate the hours of sleep and display it as a BIGINT
function calcHours() {
  // calculate the hours of sleep and display it as a bigint
}

module.exports = {
  calcDate,
  rightNow,
}