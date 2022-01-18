import React, {
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import IRecipe from "../types/recipe";
import { favoritesReducer } from "../reducers/favoritesReducer";
import { ADD_RECIPE, REMOVE_RECIPE } from "../actions/favoritesActions";
import getFavoritesFromStorage from "../utils/getFavoritesFromStorage";
import addFavoritesInStorage from "../utils/addFavoritesInStorage";

type Props = {
  children: any;
}

type IContext = {
  favorites: IRecipe[];
  addFavorite: (recipe: IRecipe) => void;
  removeFavorite: (idMeal: string) => void;
}
export const FavoritesContext = createContext({} as IContext);

export function FavoritesProvider({ children}) {
  const [favorites, dispatch] = useReducer(favoritesReducer, []);
  const [list, setList] = useState(favorites);

  useEffect(() => {
    (async () => {
      const storedFavorites = await getFavoritesFromStorage();
      if(storedFavorites) {
        setList(storedFavorites);
      }
    })();
  }, []);

  useEffect(() => {
    setList(favorites);
    addFavoritesInStorage(favorites);
  }, [favorites]);

  function addFavorite(recipe) {
    dispatch({
      type: ADD_RECIPE,
      payload: {
        recipe,
      },
    });
  }

  function removeFavorite(idMeal) {
    dispatch({
      type: REMOVE_RECIPE,
      payload: {
        idMeal,
      }
    });
  }

  return (
    <FavoritesContext.Provider value={{ favorites: list, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}
