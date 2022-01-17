import AsyncStorage from "@react-native-async-storage/async-storage";
import IRecipe from "../types/recipe";

async function getFavoritesFromStorage(): Promise<IRecipe[] | false> {
  const storedFavorites = await AsyncStorage.getItem("@recipe-app-favorites");

  if(storedFavorites) {
    return JSON.parse(storedFavorites);
  }
  return false;
}

export default getFavoritesFromStorage;
