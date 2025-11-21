// src/utils/calculations.js

// Converts donated food quantity into number of meals served
export function calculateMeals(donations) {
  // donations: { riceKg: 3, chapati: 10, mealBoxes: 5 }
  let totalMeals = 0;
  if (donations.riceKg) totalMeals += donations.riceKg * 4; // 1kg rice = 4 meals
  if (donations.chapati) totalMeals += donations.chapati;   // 1 chapati = 1 meal
  if (donations.mealBoxes) totalMeals += donations.mealBoxes; // 1 box = 1 meal
  return totalMeals;
}
