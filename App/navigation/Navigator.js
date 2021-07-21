import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterNewUser from "../screens/RegisterNewUser";
import LandingScreen from "../screens/LandingScreen";
import Login from "../screens/Login";
import color from "../constants/Colors";

const MainStack = createStackNavigator();
const Navigator = () => (
  <NavigationContainer>
    <MainStack.Navigator>
      <MainStack.Screen
        name={"login"}
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <MainStack.Screen
        name={"register"}
        component={RegisterNewUser}
        options={{
          headerShown: false,
        }}
      />

      <MainStack.Screen
        name={"landing"}
        component={LandingScreen}
        options={{
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default Navigator;
