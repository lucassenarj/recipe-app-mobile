import React, { Suspense } from "react";
import { Text } from "react-native";
import Header from "../../components/Header";
import Recipe from "../../components/Recipe";

import { Wrapper, Container, Main } from "./styles";

function Details({ route, navigation }) {
  return (
    <Wrapper>
      <Container>
        <Header navigation={navigation} />
        <Main>
          <Suspense fallback={<Text>Loading...</Text>}>
            <Recipe id={route.params.id} />
          </Suspense>
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Details;
