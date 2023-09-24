import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  View,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import IconText from "../components/IconText";
import moment from "moment";
import numeral from "numeral";
import { useGetWeather } from "../../hooks/useGetWeather";

const City = ({ weatherData }) => {
  const [refresh, setRefresh] = useState(false);
  const [l, e, w, refreshData] = useGetWeather();

  const refreshApp = () => {
    setRefresh(true);
    setTimeout(async () => {
      await refreshData();
      setRefresh(false);
    }, 4000);
  };
  const {
    container,
    bgImg,
    cityName,
    countryName,
    bodyWrapper,
    cityText,
    populationText,
    riseSetWrapper,
    riseSetText,
  } = styles;

  const { name, country, population, sunrise, sunset } = weatherData;
  return (
    <SafeAreaView style={container}>
      <ImageBackground style={bgImg} source={require("../../assets/city.jpg")}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={() => refreshApp()}
            />
          }
        >
          <View style={bodyWrapper}>
            <Text style={[cityName, cityText]}>Lahore</Text>
            <Text style={[countryName, cityText]}>PK</Text>

            <IconText
              iconName={"user"}
              bodyText={`${numeral(population).format("0,0")}`}
              iconColor={"black"}
              bodyTextStyles={populationText}
            />
          </View>
        </ScrollView>
        <View style={riseSetWrapper}>
          <IconText
            iconName={"sunrise"}
            bodyText={moment(sunrise).format("LT")}
            iconColor={"white"}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={"sunset"}
            bodyText={moment(sunset).format("LT")}
            iconColor={"white"}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    backgroundColor: "lightgrey",
  },
  bgImg: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
    marginBottom: 40,
  },
  cityText: { fontWeight: "bold", color: "white" },
  bodyWrapper: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
  },

  populationText: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
  },
  riseSetWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 60,
    flex: 1,
  },

  riseSetText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default City;
