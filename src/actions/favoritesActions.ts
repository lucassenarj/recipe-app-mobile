export const ADD_RECIPE: string = "ADD_RECIPE";
export const REMOVE_RECIPE: string = "REMOVE_RECIPE";

export const addRecipe = ({ recipe }, state) => {
  const oldList = state;
  let newList = [recipe];
  if (oldList.length >= 1) {
    newList = [...oldList, recipe];
  }
  return newList;
};

export const removeRecipe = ({ idMeal }, state) => {
  const list = [...state];
  const newList = list.filter((items) => items.idMeal !== idMeal);
  return newList;
};