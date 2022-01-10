import React from "react";
import RecipeList from "../../components/RecipeList";

import { Wrapper, Container, Main } from "./styles";
import CategoryList from "../../components/CategoryList";

function Recipes({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <Main>
          <CategoryList />
          <RecipeList selectRecipe={navigation} />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Recipes;
