import React, { useState } from "react";
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

const CreateIssue = ({ closeFab }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Food", value: "Food" },
    { label: "Health", value: "Health" },
    { label: "Social", value: "Social" },
    { label: "Others", value: "Others" },
  ]);
  const [desc, setDesc] = useState(null);
  //category
  //description
  return (
    <View style={Style.fab}>
      <Text style={Style.header}> Create an Issue</Text>
      <View style={Style.close}>
        <TouchableOpacity onPress={() => closeFab()}>
          <AntDesign name="close" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={Style.typeContainer}>
        <Text style={Style.issueText}>Issue Type</Text>
        <DropDownPicker
          items={items}
          dropDownDirection="AUTO"
          bottomOffset={100}
          placeholder="Choose Issue"
          open={open}
          value={value}
          setOpen={setOpen}
          setItems={setItems}
          setValue={setValue}
          style={Style.pickerContainer}
          dropDownContainerStyle={Style.dropDown}
        />
      </View>
      <Text style={Style.descText}>
        Please provide detailed description of the issue below
      </Text>
      <TextInput
        style={Style.input}
        onChangeText={setDesc}
        value={desc}
        placeholder="Detailed description"
        multiline={true}
        numberOfLines={10}
      />
      <TouchableOpacity style={Style.button} onPress={() => closeFab()}>
        <Text style={Style.buttonText}>Create issue</Text>
      </TouchableOpacity>
    </View>
  );
};
const Style = StyleSheet.create({
  fab: {
    height: "100%",
    width: "100%",
  },
  header: {
    alignSelf: "center",
    marginTop: 16,
    color: Colors.lightBlack,
    fontSize: 18,
  },
  close: {
    alignSelf: "flex-end",
    right: 16,
    top: 16,
    position: "absolute",
  },
  pickerContainer: {
    width: 200,
    height: 42,
    alignSelf: "center",
    borderRadius: 8,
    borderWidth: 0,
    margin: 3.5,
    backgroundColor: Colors.LightGrey,
  },
  dropDown: {
    width: 200,
    maxHeight: 100,
    alignSelf: "center",
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    margin: 3.5,
    backgroundColor: Colors.White,
  },
  issueText: {
    marginTop: 12,
    color: Colors.lightBlack,
    marginLeft: 10,
    fontSize: 16,
  },
  descText: {
    color: Colors.lightBlack,
    marginLeft: 25,
    fontSize: 16,
  },
  typeContainer: {
    marginHorizontal: 15,
    marginTop: 40,
    flexDirection: "row",
    height: 150,
  },
  input: {
    marginTop: 10,
    padding: 8,
    width: "85%",
    textAlignVertical: "top",
    backgroundColor: Colors.LightGrey,
    marginLeft: 25,
    borderRadius: 8,
  },
  button: {
    backgroundColor: Colors.green,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 15,
    alignSelf: "center",

    marginTop: 70,
  },
  buttonText: {
    color: Colors.White,
  },
});
export default CreateIssue;
