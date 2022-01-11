import api from "../services/api";

async function getRecipesByCategoryRequest(category: string) {
  try {
    const { status, data } = await api.get(`/filter.php?c=${category}`);
    if (status !== 200) {
      throw Error("Error while fetching the recipes");
    }

    return {
      status,
      results: data,
    }
  } catch(error) {
    return {
      status: error.code,
      error: error.response,
    }
  }
};

export default getRecipesByCategoryRequest;
