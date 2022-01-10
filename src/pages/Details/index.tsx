import React from "react";
import { StatusBar } from "react-native";
import Header from "../../components/Header";
import Recipe from "../../components/Recipe";
import colors from "../../styles/colors";

import { Wrapper, Container, Main } from "./styles";

function Details({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <Header navigation={navigation} />
        <Main>
          <Recipe />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Details;
