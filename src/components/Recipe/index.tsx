import React from "react";

import Beef from "../../assets/images/categories/beef.png";

import {
  Wrapper,
  Heading,
  Container,
  Thumbnail,
  Details,
  Picture,
  Description
} from "./styles";

function Recipe() {
  return (
    <Wrapper>
      <Container>
        <Thumbnail>
          <Picture source={Beef} />
        </Thumbnail>
        <Details>
          <Heading>
            Chicken Curry with Rice
          </Heading>
          <Description>
            Indian chicken curry stwed in a onion and tomate-base souce, flavoured with ginger, garlic, tomato puree, chilli peppers and a variety of spices, often including turmeric, cumun, cardamon.
            Indian chicken curry stwed in a onion and tomate-base souce, flavoured with ginger, garlic, tomato puree, chilli peppers and a variety of spices, often including turmeric, cumun, cardamon.
            Indian chicken curry stwed in a onion and tomate-base souce, flavoured with ginger, garlic, tomato puree, chilli peppers and a variety of spices, often including turmeric, cumun, cardamon.
            Indian chicken curry stwed in a onion and tomate-base souce, flavoured with ginger, garlic, tomato puree, chilli peppers and a variety of spices, often including turmeric, cumun, cardamon.
            Indian chicken curry stwed in a onion and tomate-base souce, flavoured with ginger, garlic, tomato puree, chilli peppers and a variety of spices, often including turmeric, cumun, cardamon.
          </Description>
        </Details>
      </Container>
    </Wrapper>
  );
}

export default Recipe;
