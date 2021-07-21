import React from "react";
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from "react-native";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Menu = ({ onItemSelected, logout }) => {
  const window = Dimensions.get("window");
  const uri = "https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png";

  const gotoLogin = () => {
    navigation.navigate("login");
  };
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{ uri }} />
        <Text style={styles.name}>Guest</Text>
      </View>
      <View style={styles.lists}>
        <View style={styles.item}>
          <AntDesign name="addusergroup" size={24} color="white" />
          <Text onPress={() => onItemSelected("About")} style={styles.itemText}>
            Add Family Members
          </Text>
        </View>

        <View style={styles.item}>
          <AntDesign name="contacts" size={24} color="white" />
          <Text onPress={() => onItemSelected("About")} style={styles.itemText}>
            Contact Us
          </Text>
        </View>

        <View style={styles.item}>
          <Entypo name="info" size={24} color="white" />
          <Text onPress={() => onItemSelected("About")} style={styles.itemText}>
            About
          </Text>
        </View>
        <View style={styles.item}>
          <SimpleLineIcons name="logout" size={24} color="red" />
          <Text onPress={() => logout()} style={styles.logoutitemText}>
            Logout
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>RogueApps Pvt.Ltd</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.green,
  },
  avatarContainer: {
    flex: 0.1,
    padding: 35,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  name: {
    position: "absolute",
    left: 100,
    top: 50,
    fontSize: 18,
    color: Colors.White,
  },
  item: {
    flexDirection: "row",
    marginVertical: 14,
    fontSize: 16,
    fontWeight: "300",
    paddingRight: 65,
    paddingLeft: 25,
    color: Colors.White,
  },
  itemText: {
    marginLeft: 10,
    color: Colors.White,
    fontSize: 16,
  },
  logoutitemText: {
    marginLeft: 10,
    color: Colors.red,
    fontSize: 16,
  },
  footer: {
    flex: 0.03,
    paddingHorizontal: 2,
  },
  footerText: {
    color: Colors.White,
    fontSize: 9,
    marginLeft: 80,
  },
  lists: {
    flex: 0.9,
  },
});

export default Menu;
