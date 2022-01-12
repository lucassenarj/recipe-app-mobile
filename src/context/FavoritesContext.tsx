import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import IRecipe from "../types/recipe";

type Props = {
  children: any;
}

type IContext = {
  favorites: IRecipe[];
  setFavorites: Dispatch<SetStateAction<IRecipe[]>>;
}
export const FavoritesContext = createContext({} as IContext);


export function FavoritesProvider({ children }){
  const [favorites, setFavorites] = useState<IRecipe[]>([]);
  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
};
