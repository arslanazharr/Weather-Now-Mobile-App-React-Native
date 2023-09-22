import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;
  const { item, temp } = styles;
  return (
    <View style={item}>
      <Feather name="sun" size={40} color="black" />
      <Text>{dt_txt}</Text>
      <View>
        <Text style={temp}>{min}</Text>
        <Text style={temp}>{max}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-around",
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: "pink",
    borderRadius: 10,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  temp: {
    fontSize: 20,
  },
});

export default ListItem;
