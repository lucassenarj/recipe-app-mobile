import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favorites from "../pages/Favorites";
import Details from "../pages/Details";

const { Navigator, Screen } = createStackNavigator();

function FavoritesNavigator() {
  return (
    <Navigator screenOptions={{
      headerShown: false,
    }}>
      <Screen name="FavoritesList" component={Favorites} />
      <Screen name="Info" component={Details} />
    </Navigator>
  );
}

export default FavoritesNavigator;
