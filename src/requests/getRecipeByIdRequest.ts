import api from "../services/api";

async function getRecipeByIdRequest(id: string) {
  try {
    const { status, data } = await api.get(`/lookup.php?i=${id}`);
    if (status !== 200) {
      throw Error("Error while fetching the recipes");
    }

    return {
      status,
      results: data
    }
  } catch(error) {
    return {
      status: error.code,
      error: error.response,
    }
  }
};

export default getRecipeByIdRequest;
