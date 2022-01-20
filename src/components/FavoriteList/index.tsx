import React from "react";
import { FlatList } from "react-native";
import IRecipe from "../../types/recipe";
import FavoriteItem from "../FavoriteItem";

import { Container } from "./style";

type Props = {
  favorites: IRecipe[];
};

function FavoriteList({ favorites }: Props) {
  return (
    <Container>
      <FlatList
        data={favorites}
        renderItem={({ item }) => (<FavoriteItem {...item} />)}
        keyExtractor={recipe => recipe.idMeal}
      />
    </Container>
  );
};

export default FavoriteList;