import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  StatusBar,
  ToastAndroid,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RadioGroup from "react-native-radio-buttons-group";
import NetInfo from "@react-native-community/netinfo";
import Color from "../constants/Colors";

const RegisterNewUser = ({ navigation }) => {
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);
  const [cardType, setCardType] = useState(null);
  const [pincode, setPincode] = useState(null);
  const [members, setMembers] = useState(null);
  const radioButtonsData = [
    {
      id: "1",
      label: "APL",
      value: "APL",
    },
    {
      id: "2",
      label: "BPL",
      value: "BPL",
    },
  ];
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  const onPressRadioButton = (radioButtonsArray) => {
    setRadioButtons(radioButtonsArray);
    radioButtons.forEach((element) => {
      element.selected ? setCardType(element.value) : null;
    });
  };

  const Submit = () => {
    const val = validate();
    val == "true"
      ? continueSubmission()
      : ToastAndroid.show(val, ToastAndroid.SHORT);
    //CheckConnectivity();
  };
  CheckConnectivity = () => {
    NetInfo.fetch().then((state) => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
    });
  };

  const continueSubmission = () => {
    insertData();
    navigation.navigate("landing");
  };

  const validate = () => {
    if (name == null || name == "") {
      return "Please Enter your name";
    } else if (address == null || address == "") {
      return "Please Enter your address";
    } else if (phone == null || phone == "") {
      return "Please Enter your phone";
    } else if (cardType == null || cardType == "") {
      return "Please Choose card type";
    } else if (pincode == null || pincode == "") {
      return "Please Enter your pincode";
    } else if (members == null || members == "") {
      return "Please Enter your members";
    } else {
      return "true";
    }
  };

  const insertData = () => {};

  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={Style.main}>
        <StatusBar backgroundColor={Color.White} barStyle="dark-content" />
        <Text style={Style.header}>REGISTER</Text>
        <TextInput
          style={Style.input}
          onChangeText={setName}
          value={name}
          placeholder="Enter Name"
        />
        <TextInput
          style={Style.input}
          onChangeText={setAddress}
          value={address}
          placeholder=" Enter Address"
        />
        <TextInput
          style={Style.input}
          keyboardType="number-pad"
          onChangeText={setPhone}
          value={phone}
          placeholder=" Enter Phone"
        />
        <View style={Style.card}>
          <Text style={Style.carditem}>Ration card category</Text>
          <View style={Style.carditem}>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
              layout="row"
            />
          </View>
        </View>
        <TextInput
          style={Style.input}
          keyboardType="number-pad"
          onChangeText={setPincode}
          value={pincode}
          placeholder=" Enter Pincode"
        />
        <TextInput
          style={Style.input}
          keyboardType="number-pad"
          onChangeText={setMembers}
          value={members}
          placeholder=" Enter No.of Family Members"
        />
        <TouchableOpacity style={Style.submit} onPress={() => Submit()}>
          <Text style={Style.submitText}>SUBMIT</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const Style = StyleSheet.create({
  main: {
    flex: 1,
  },
  input: {
    margin: 15,
    height: 45,
    borderColor: Color.grey,
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 8,
    color: Color.lightBlack,
  },
  header: {
    alignSelf: "center",
    marginVertical: 25,
    fontSize: 16,
  },
  statusBar: {
    backgroundColor: Color.white,
  },
  card: {
    margin: 15,
    flexDirection: "row",
    borderColor: Color.grey,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  carditem: {
    flex: 0.5,
    color: Color.Grey,
  },
  submit: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Color.green,
    marginTop: 40,
    backgroundColor: Color.green,
  },
  submitText: {
    color: Color.White,
    fontSize: 16,
  },
});

export default RegisterNewUser;
