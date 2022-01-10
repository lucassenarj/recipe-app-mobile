import React from "react";
import { Image, View, Text } from "react-native";
import Beef from "../../assets/images/categories/beef.png";
import Breakfast from "../../assets/images/categories/Breakfast.png";

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

function RecipeList({ selectRecipe }){
  return (
    <Wrapper>
      <Heading>
        <Text>Popular Now</Text>
      </Heading>
      <List>
        <Container onPress={() => selectRecipe.navigate("Details")}>
          <Thumbnail>
            <Picture source={Beef} />
          </Thumbnail>
          <Details>
            <Title>Garlic Butter Steak with Asparagus</Title>
          </Details>
        </Container>
        <Container>
          <Thumbnail>
            <Picture source={Breakfast} />
          </Thumbnail>
          <Details>
            <Title numberOfLines={2}>Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber</Title>
          </Details>
        </Container>
        <Container>
          <Thumbnail>
            <Picture source={Beef} />
          </Thumbnail>
          <Details>
            <Title>Garlic Butter Steak with Asparagus</Title>
          </Details>
        </Container>
        <Container>
          <Thumbnail>
            <Picture source={Breakfast} />
          </Thumbnail>
          <Details>
            <Title>Garlic Butter Steak with Asparagus</Title>
          </Details>
        </Container>
      </List>
    </Wrapper>
  );
};

export default RecipeList;