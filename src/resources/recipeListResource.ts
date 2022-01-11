import getRecipesByCategoryRequest from "../requests/getRecipesByCategoryRequest";
import wrapPromise from "../utils/wrapPromisse";

const createRecipeListResource = (category: string = "Beef") => {
  return {
    recipeList: wrapPromise(getRecipesByCategoryRequest(category)),
  }
};

export default createRecipeListResource;
