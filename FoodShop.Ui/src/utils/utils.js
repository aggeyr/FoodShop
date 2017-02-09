export function mergeSelected(selected, newItem) {
  const index = selected.findIndex((item) => item.id === newItem.id);
  if (~index) {
    selected[index] = newItem;
  } else {
    selected.push(newItem);
  }
  return selected;
}

export function mergeMeals(selected, meals) {
  meals.map((meal) => {
    let index = selected.findIndex((item) => item.id === meal.id);
    if (~index) {
      selected[index] = meal;
    } else {
      selected.push(meal);
    }
  });
  return selected;
}

export function calculateTotal(selected) {
  let total = 0;
  selected.map((item) =>
    total += item.price * item.number
  );
  return total;
}

export function renderNumberOptions(number) {
  let options = [];
  for(let i = 0; i < number; i++) {
    options.push({
      value: i,
      text: i
    });
  }
  return options;
}

export function findNumber(selected, id) {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i].id === id)
      return selected[i].number;
  }
  return 0;
}
export function findSelectedConfigurations(selected, configurations) {
  let result = [];
  configurations.map((item) => {
    let overlap = selected.find((meal) => meal.id === item.Id);
    if (overlap) {
      result.push(overlap);
    }
  });
  return result;
}