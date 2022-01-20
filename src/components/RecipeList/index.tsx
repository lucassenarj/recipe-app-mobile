import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Text } from "react-native";
import { useAsyncResource } from "use-async-resource";
import { CategoryContext } from "../../context/CategoryContext";
import getRecipesByCategoryRequest from "../../requests/getRecipesByCategoryRequest";

import {
  List,
  Wrapper,
  Heading,
  Container,
  Thumbnail,
  Details,
  Picture,
  Title
} from "./styles";

function RecipeList(){
  const navigation = useNavigation();
  const { selected } = useContext(CategoryContext);
  const [resource] = useAsyncResource(getRecipesByCategoryRequest, selected);

  const suspender = resource();
  const { results: { meals: recipes } } = suspender;
  return (
    <Wrapper>
      <Heading>
        <Text>Popular Now</Text>
      </Heading>
      <List>
        { recipes && recipes.map(recipe => (
          <Container key={recipe.idMeal} onPress={() => navigation.navigate("Details", { id: recipe.idMeal })}>
            <Thumbnail>
              <Picture source={{ uri: recipe.strMealThumb }} />
            </Thumbnail>
            <Details>
              <Title>{ recipe.strMeal }</Title>
            </Details>
          </Container>
        ))}
      </List>
    </Wrapper>
  );
};

export default RecipeList;