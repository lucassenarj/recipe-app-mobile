import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Recipe from "../../components/Recipe";
import { FavoritesProvider } from "../../context/FavoritesContext";
import getRecipeByIdRequest from "../../requests/getRecipeByIdRequest";
import IRecipe from "../../types/recipe";

import { Wrapper, Container, Main } from "./styles";

function Details({ route, navigation }) {
  const { params: { id } } = route;
  const [recipe, setRecipe] = useState<IRecipe | null>(null);

  useEffect(() => {
    (async () => {
      const { results } = await getRecipeByIdRequest(id);
      const { meals } = results;
      setRecipe(meals[0]);
    })();
  }, []);

  return (
    <Wrapper>
      <Container>
        {
          recipe && (
            <>
              <Header recipe={recipe} navigation={navigation} />
              <Main>
                <Recipe recipe={recipe} />
              </Main>
            </>
          )
        }
      </Container>
    </Wrapper>
  );
};

export default Details;
