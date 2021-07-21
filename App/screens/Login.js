import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Image,
} from "react-native";
import Colors from "../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Login = ({ navigation }) => {
  const [name, setName] = useState(null);

  const gotoLanding = () => {
    navigation.navigate("landing");
  };
  const gotoRegister = () => {
    navigation.navigate("register");
  };
  return (
    <View style={Style.container}>
      <StatusBar backgroundColor={Colors.green} />
      <View style={Style.header}>
        <Image
          style={Style.logo}
          source={require("../assets/Community-PNG-Pic.png")}
        />
      </View>
      <View style={Style.textBoxContainer}>
        <View style={Style.item}>
          <FontAwesome name="phone" size={40} color="white" />
          <TextInput
            style={Style.input}
            onChangeText={setName}
            value={name}
            placeholder="Registered Phone"
            placeholderTextColor={Colors.White}
            keyboardType="numeric"
          />
        </View>

        <View style={Style.btn}>
          <TouchableOpacity
            onPress={() => {
              gotoLanding();
            }}
          >
            <Text style={Style.loginBtn}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.btn}>
          <TouchableOpacity
            onPress={() => {
              gotoRegister();
            }}
          >
            <Text style={Style.registerBtn}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={Style.buttons}>
        <Text style={Style.footerText}>RogueApps Pvt.Ltd</Text>
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.green,
  },
  item: {
    borderRadius: 15,
    flexDirection: "row",

    fontSize: 16,
    fontWeight: "300",
    padding: 15,
    color: Colors.White,
    marginHorizontal: 15,
  },
  itemText: {
    marginLeft: 10,
    color: Colors.White,
    fontSize: 16,
  },
  header: {
    flex: 3,
  },
  textBoxContainer: {
    flex: 3,
    backgroundColor: Colors.green,
  },
  buttons: {
    flex: 0.15,
    alignContent: "center",
  },
  input: {
    height: 45,
    width: "90%",
    borderColor: Colors.grey,
    borderRadius: 15,
    borderWidth: 1,
    paddingLeft: 8,
    color: Colors.White,
    marginLeft: 15,
  },
  btn: {
    alignItems: "center",
  },
  loginBtn: {
    fontSize: 15,
    marginTop: 20,
    backgroundColor: Colors.White,
    paddingHorizontal: 45,
    paddingVertical: 15,
    borderRadius: 15,
  },
  registerBtn: {
    fontSize: 15,
    marginTop: 20,
    color: Colors.White,
  },
  footerText: {
    color: Colors.White,
    fontSize: 9,
    alignSelf: "center",
  },
  logo: {
    marginTop: 20,
    height: 200,
    width: 200,
    alignSelf: "center",
  },
});

export default Login;
