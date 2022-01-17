import AsyncStorage from "@react-native-async-storage/async-storage";
import IRecipe from "../types/recipe";
import clearStorage from "./clearStorage";
import getFavoritesFromStorage from "./getFavoritesFromStorage";

async function addFavoritesInStorage(favorites: IRecipe[]): Promise<void> {
  const storedFavorites = await getFavoritesFromStorage();
  if(storedFavorites) {
    await clearStorage();
  }
  await AsyncStorage.setItem("@recipe-app-favorites", JSON.stringify(favorites));
}

export default addFavoritesInStorage;
