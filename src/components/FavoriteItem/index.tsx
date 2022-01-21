import React from "react";
import { Container, Avatar, Picture, Details, Title } from "./style";
import IRecipe from "../../types/recipe";
import { useNavigation } from '@react-navigation/native';

function FavoriteItem(recipe: IRecipe) {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.navigate("Info", { id: recipe.idMeal })}>
      <Avatar>
        <Picture source={{ uri: recipe.strMealThumb }} />
      </Avatar>
      <Details>
        <Title>{recipe.strMeal}</Title>
      </Details>
    </Container>
  );
};

export default FavoriteItem;