import wrapPromise from "../utils/wrapPromisse";
import getRecipeByIdRequest from "../requests/getRecipeByIdRequest";

const createRecipeDetailsResource = (id: string) => {
  return {
    recipe: wrapPromise(getRecipeByIdRequest(id)),
  }
};

export default createRecipeDetailsResource;
