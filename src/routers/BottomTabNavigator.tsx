import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../styles/colors";
import RecipesNavigator from "./RecipesNavigator";

const { Navigator, Screen } = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.white,
          tabBarStyle: {
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            height: 100,
            backgroundColor: colors.black,
            borderTopWidth: 0,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
          },
          tabBarIconStyle:{
            width: 20,
            height: 20,
            marginTop: 10
          },
          headerTransparent: true,
          headerStyle: {
            backgroundColor: colors.primary
          },
          headerTitleStyle: {
            color: colors.gray
          }
        }}
      >
        <Screen
          name="Recipes"
          component={RecipesNavigator}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <FontAwesome5
                  name="concierge-bell"
                  size={size}
                  color={focused ? colors.primary : colors.white}
                />
              );
            },
          }}
        />
        <Screen
          name="Search"
          component={View}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <FontAwesome5
                  name="search"
                  size={size}
                  color={focused ? colors.primary : colors.white}
                />
              );
            },
          }}
        />
        <Screen
          name="Favorites"
          component={View}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <FontAwesome5
                  name="heart"
                  size={size}
                  color={focused ? colors.primary : colors.white}
                />
              );
            },
          }}
        />
        <Screen
          name="About"
          component={View}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <FontAwesome5
                  name="info-circle"
                  size={size}
                  color={focused ? colors.primary : colors.white}
                />
              );
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default BottomTabNavigator;
