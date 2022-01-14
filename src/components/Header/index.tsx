import React, { useContext, useEffect, useState } from "react";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import {
  Navigation,
  User,
  Wrapper
} from "./styles";
import colors from "../../styles/colors";
import { FavoritesContext } from "../../context/FavoritesContext";

function Header({ navigation, recipe }){
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    (() => {
      const founded = favorites.find((item) => item.idMeal === recipe.idMeal);
      if(founded) {
        setIsFavorite(true);
        return;
      }
      setIsFavorite(false);
    })()
  }, [favorites]);

  function handleIsFavorite() {
    if(isFavorite) {
      removeFavorite(recipe.idMeal);
      return;
    }
    addFavorite(recipe);
  }

  return (
    <Wrapper>
      <Navigation onPress={() => navigation.goBack()}>
        <FontAwesome5 name="angle-left" color={colors.white} size={24} />
      </Navigation>
      <User>
        {
          isFavorite ? (
            <AntDesign onPress={() => handleIsFavorite()} name="heart" color="red" size={24} />
          ) : (
            <AntDesign onPress={() => handleIsFavorite()} name="hearto" color="black" size={24} />
          )
        }
      </User>
    </Wrapper>
  );
}

export default Header;
