import React from "react";
import { Alert, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Color from "../constants/Colors";

const Fab = ({ onClick }) => {
  return (
    <TouchableOpacity style={Style.fab} onPress={() => onClick()}>
      <Text style={Style.text}>Add Issue</Text>
    </TouchableOpacity>
  );
};

const Style = StyleSheet.create({
  fab: {
    flexDirection: "column",
    width: 150,
    height: 60,
    borderRadius: 30,
    backgroundColor: Color.green,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 15,
    right: 15,
  },
  text: {
    color: Color.White,
    fontSize: 16,
  },
});
export default Fab;
