import React from "react";
import {
  Wrapper,
  Heading,
  Container,
  Thumbnail,
  Details,
  Picture,
  Description
} from "./styles";
import IRecipe from "../../types/recipe";

type Props = {
  recipe: IRecipe;
}

function Recipe({ recipe }: Props) {
  return (
    <Wrapper>
      <Container>
        <Thumbnail>
          <Picture source={{ uri: recipe.strMealThumb }} />
        </Thumbnail>
        <Details>
          <Heading>
            {recipe.strMeal}
          </Heading>
          <Description>
            { recipe.strInstructions }
          </Description>
        </Details>
      </Container>
    </Wrapper>
  );
}

export default Recipe;
