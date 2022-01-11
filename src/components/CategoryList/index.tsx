import React, { useContext } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import ICategory from "../../types/category";
import categoryList from "../../utils/categoryList";;

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

function CategoryList() {
  const { selected, setSelected } = useContext(CategoryContext);
  return (
    <Wrapper>
      <Heading>Good meals</Heading>
      <Heading>Fast recipes</Heading>

      <List>
        {
          categoryList.map((item: ICategory) => (
          <Container key={item.idCategory} onPress={() => setSelected(item.strCategory)}>
            <Thumbnail isActive={item.strCategory === selected}>
              <Picture source={{ uri: item.strCategoryThumb }} />
            </Thumbnail>
            <Details>
              <Title>{ item.strCategory }</Title>
            </Details>
          </Container>
          ))
        }
      </List>
    </Wrapper>
  );
};

export default CategoryList;
