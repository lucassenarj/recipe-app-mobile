import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  Avatar,
  Navigation,
  User,
  Wrapper
} from "./styles";
import colors from "../../styles/colors";

function Header({ navigation }){
  return (
    <Wrapper>
      <Navigation onPress={() => navigation.goBack()}>
        <FontAwesome5 name="angle-left" color={colors.white} size={24} />
      </Navigation>
      <User>
        <FontAwesome5 name="heart" size={24} />
      </User>
    </Wrapper>
  );
}

export default Header;
