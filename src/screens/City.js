import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";

const City = () => {
  const {
    container,
    bgImg,
    cityName,
    countryName,
    bodyWrapper,
    cityText,
    populationWrapper,
    populationText,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground style={bgImg} source={require("../../assets/city.jpg")}>
        <View style={bodyWrapper}>
          <Text style={[cityName, cityText]}>Lahore</Text>
          <Text style={[countryName, cityText]}>Pakistan</Text>
        </View>
        <View style={populationWrapper}>
          <Feather name="user" size={50} color="white" />
          <Text style={populationText}>8,000,000</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: StatusBar.currentHeight || 0, flex: 1 },
  bgImg: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: { fontWeight: "bold", color: "white" },
  bodyWrapper: {
    flex: 1,
    alignItems: "center",
  },
  populationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  populationText: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
});

export default City;
