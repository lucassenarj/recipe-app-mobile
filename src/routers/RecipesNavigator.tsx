import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Recipes from "../pages/Recipes";
import { View } from "react-native";
import Details from "../pages/Details";

const { Navigator, Screen } = createStackNavigator();

function RecipesNavigator() {
  return (
    <Navigator screenOptions={{
      headerShown: false,
    }}>
      <Screen name="Home" component={Recipes} />
      <Screen name="Details" component={Details} />
    </Navigator>
  );
}

export default RecipesNavigator;
