export const ADD_RECIPE: string = "ADD_RECIPE";
export const REMOVE_RECIPE: string = "REMOVE_RECIPE";

export const addRecipe = (recipe, state) => {
  console.log("addRecipe");
  console.log(recipe);
  return {
    favorites: [...state.favorites, recipe],
  }
};

export const removeRecipe = (idMeal, state) => {
  const list = [...state];
  list.filter((items) => items.idMeal !== idMeal);
  return {
    favorites: [...list],
  }
};