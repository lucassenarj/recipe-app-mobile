import { addRecipe, ADD_RECIPE, removeRecipe, REMOVE_RECIPE } from "../actions/favoritesActions";


export function favoritesReducer(state, action) {
  switch(action.type) {
    case ADD_RECIPE: {
      return addRecipe(action.recipe, state);
    }
    case REMOVE_RECIPE: {
      return removeRecipe(action.idMeal, state);
    }

    default: {
      return state;
    }
  }
}