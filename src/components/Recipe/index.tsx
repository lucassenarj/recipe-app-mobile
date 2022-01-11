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
import { useAsyncResource } from "use-async-resource";
import getRecipeByIdRequest from "../../requests/getRecipeByIdRequest";

type Props = {
  id: string;
}

function Recipe({id}: Props) {
  const [resource] = useAsyncResource(getRecipeByIdRequest, id);
  const suspender = resource();
  const { results: { meals } } = suspender;
  const recipe: IRecipe = meals[0];

  return recipe && (
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
