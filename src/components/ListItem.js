import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";
import moment from "moment";

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;
  const { item, temp, itemShadow, date, dateTextWrapper, highLowWrapper } =
    styles;

  return (
    <View style={[item, itemShadow]}>
      <Feather name={weatherType[condition].icon} size={40} color="white" />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={date}>{moment(dt_txt).format("LT")}</Text>
      </View>
      <View style={highLowWrapper}>
        <Text style={temp}>{`${Math.round(min)}°`}/</Text>
        <Text style={temp}>{`${Math.round(max)}°`}</Text>
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
    backgroundColor: "darkgrey",
    borderRadius: 10,
  },

  itemShadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
  },
  temp: {
    fontSize: 20,
    color: "white",
  },
  date: {
    color: "white",
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  dateTextWrapper: {
    flexDirection: "column",
  },
});

export default ListItem;
