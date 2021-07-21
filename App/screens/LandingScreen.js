import React, { useRef, useState } from "react";
import {
  Text,
  StatusBar,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import SideMenu from "react-native-side-menu";
import Fab from "../components/Fab";
import Menu from "../components/Menu";
import Colors from "../constants/Colors";
import CreateIssue from "../components/CreateIssue";
import { Modalize } from "react-native-modalize";

const LandingScreen = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const image = require("../assets/menu.png");
  const onItemSelected = (item) => {
    setIsOpen(false);
    setSelectedItem(item);
  };
  const [visible, setVisible] = useState(false);
  const issueRef = useRef(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.White} barStyle={"dark-content"} />
      {/* Side Menu Setup */}
      <StatusBar />
      <SideMenu
        menu={
          <Menu
            onItemSelected={() => onItemSelected()}
            logout={() => {
              navigation.navigate("login");
            }}
          />
        }
        isOpen={isOpen}
        onChange={(isOpen) => console.log("OnChange Reached")}
      >
        <View style={Style.container}>
          <Fab
            style={Style.fab}
            onClick={() => {
              issueRef.current?.open();
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            toggle();
          }}
          style={Style.button}
        >
          <Image
            source={require("../assets/menu.png")}
            style={{ width: 32, height: 32 }}
          />
        </TouchableOpacity>
      </SideMenu>
      <Modalize ref={issueRef} withHandle={false}>
        <CreateIssue
          closeFab={() => {
            issueRef.current?.close();
          }}
        />
      </Modalize>
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    flex: 0.08,
    backgroundColor: Colors.Grey,
  },
  list: {
    flex: 0.92,
    backgroundColor: Colors.paleRed,
  },
  button: {
    position: "absolute",
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});

export default LandingScreen;
