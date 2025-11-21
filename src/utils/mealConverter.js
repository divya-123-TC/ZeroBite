export function convertToMeals(kg, boxes, chapatis) {
  let totalMeals = 0;

  if (kg) {
    totalMeals += parseInt(kg) * 4; // 1kg rice = 4 meals
  }
  if (boxes) {
    totalMeals += parseInt(boxes) * 1; // 1 box = 1 meal
  }
  if (chapatis) {
    totalMeals += parseInt(chapatis) * 1; // 1 chapati = 1 meal
  }

  return totalMeals;
}
