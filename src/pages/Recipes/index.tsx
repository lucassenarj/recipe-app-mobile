import React, { Suspense } from "react";
import RecipeList from "../../components/RecipeList";
import { Wrapper, Container, Main } from "./styles";
import CategoryList from "../../components/CategoryList";
import { Text } from "react-native";
import { CategoryProvider } from "../../context/CategoryContext";

function Recipes({ navigation }) {
  return (
    <CategoryProvider>
      <Wrapper>
        <Container>
          <Main>
            <CategoryList />
            <Suspense fallback={<Text>Loading</Text>}>
              <RecipeList />
            </Suspense>
          </Main>
        </Container>
      </Wrapper>
    </CategoryProvider>
  );
};

export default Recipes;
