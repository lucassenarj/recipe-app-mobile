import React, { Suspense, useState } from "react";
import { Text } from "react-native";
import Header from "../../components/Header";
import Recipe from "../../components/Recipe";
import { FavoritesProvider } from "../../context/FavoritesContext";
import createRecipeDetailsResource from "../../resources/recipeDetailsResource";

import { Wrapper, Container, Main } from "./styles";

function Details({ route, navigation }) {
  const { params: { id } } = route;
  const [resource, setResource] = useState(createRecipeDetailsResource(id));

  return (
    <FavoritesProvider>
      <Wrapper>
        <Container>
          <Suspense fallback={<Text>Loading...</Text>}>
            <Header resource={resource} navigation={navigation} />
          </Suspense>
          <Main>
            <Suspense fallback={<Text>Loading...</Text>}>
              <Recipe resource={resource} />
            </Suspense>
          </Main>
        </Container>
      </Wrapper>
    </FavoritesProvider>
  );
};

export default Details;
