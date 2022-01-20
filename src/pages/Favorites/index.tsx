import React, { useContext } from "react";
import { Text } from "react-native";
import FavoriteList from "../../components/FavoriteList";
import { FavoritesContext } from "../../context/FavoritesContext";

import { Wrapper, Container, Main, Heading } from "./styles";

function Favorites({ navigation }) {
  const { favorites } = useContext(FavoritesContext);
  return (
    <Wrapper>
      <Container>
        <Heading>
          <Text>My Recipes</Text>
        </Heading>
        <Main>
          {
            favorites && (<FavoriteList favorites={favorites} />)
          }
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Favorites;
