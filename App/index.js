import React from "react";
import Navigator from "./navigation/Navigator";
import { LogBox } from "react-native";
export default function App() {
  LogBox.ignoreAllLogs(true);
  return <Navigator />;
}
