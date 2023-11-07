/**
 * Determines whether meat temperature is high enough
 * @param {string} kind
 * @param {number} internalTemp
 * @param {string} doneness
 * @returns {boolean} isCooked
 */
const foodIsCooked = function (kind, internalTemp, doneness) {
  if (kind == "chicken" || kind == "beef") {
    if (
      (internalTemp > 90 && doneness !== "well") ||
      doneness == "medium" ||
      doneness == "rare"
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// Test function
console.log(foodIsCooked("chicken", 90)); // should be false
console.log(foodIsCooked("chicken", 190)); // should be true
console.log(foodIsCooked("beef", 138, "well")); // should be false
console.log(foodIsCooked("beef", 138, "medium")); // should be true
console.log(foodIsCooked("beef", 138, "rare")); // should be true
