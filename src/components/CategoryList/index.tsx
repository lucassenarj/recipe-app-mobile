import React from "react";
import Beef from "../../assets/images/categories/beef.png";
import Chicken from "../../assets/images/categories/chicken.png";
import Dessert from "../../assets/images/categories/dessert.png";
import Lamb from "../../assets/images/categories/lamb.png";

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
  return (
    <Wrapper>
      <Heading>Good meals</Heading>
      <Heading>Fast recipes</Heading>

      <List>
        <Container>
          <Thumbnail isActive={true}>
            <Picture source={Beef} />
          </Thumbnail>
          <Details>
            <Title>Beef</Title>
          </Details>
        </Container>
        <Container>
          <Thumbnail>
            <Picture source={Chicken} />
          </Thumbnail>
          <Details>
            <Title>Chicken</Title>
          </Details>
        </Container>
        <Container>
          <Thumbnail>
            <Picture source={Dessert} />
          </Thumbnail>
          <Details>
            <Title>Dessert</Title>
          </Details>
        </Container>
        <Container>
          <Thumbnail>
            <Picture source={Lamb} />
          </Thumbnail>
          <Details>
            <Title>Lamb</Title>
          </Details>
        </Container>
        <Container>
          <Thumbnail>
            <Picture source={Dessert} />
          </Thumbnail>
          <Details>
            <Title>Dessert</Title>
          </Details>
        </Container>
        <Container>
          <Thumbnail>
            <Picture source={Lamb} />
          </Thumbnail>
          <Details>
            <Title>Lamb</Title>
          </Details>
        </Container>
        <Container>
          <Thumbnail>
            <Picture source={Dessert} />
          </Thumbnail>
          <Details>
            <Title>Dessert</Title>
          </Details>
        </Container>
        <Container>
          <Thumbnail>
            <Picture source={Lamb} />
          </Thumbnail>
          <Details>
            <Title>Lamb</Title>
          </Details>
        </Container>
      </List>
    </Wrapper>
  );
};

export default CategoryList;
