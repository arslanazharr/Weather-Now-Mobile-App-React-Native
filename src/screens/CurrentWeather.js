import {
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  RefreshControl,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";
import { useState } from "react";
import { useGetWeather } from "../../hooks/useGetWeather";

export default function CurrentWeather({ weatherData }) {
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
    message,
    description,
    bodyWrapper,
    highLow,
    highLowWrapper,
    feels,
    tempStyle,
    container,
    wrapper,
    textShadow,
  } = styles;

  const {
    main: { feels_like, temp, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0]?.main;

  return (
    <SafeAreaView style={wrapper}>
      <ImageBackground
        source={weatherType[weatherCondition]?.img}
        style={{ flex: 1 }}
      >
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={() => refreshApp()}
            />
          }
        >
          <View style={container}>
            <Feather
              name={weatherType[weatherCondition]?.icon}
              size={100}
              color="white"
              style={styles.icon}
            />

            <RowText
              messageOne={`${Math.round(temp)}°`}
              messageTwo={`Feels like ${Math.round(feels_like)}°`}
              messageOneStyles={[tempStyle, textShadow]}
              messageTwoStyles={[feels, textShadow]}
            />
            <RowText
              messageOne={`H: ${Math.round(temp_max)}°`}
              messageTwo={`L: ${Math.round(temp_min)}°`}
              messageOneStyles={[highLow, textShadow]}
              messageTwoStyles={[highLow, textShadow]}
              containerStyles={highLowWrapper}
            />
          </View>
        </ScrollView>
        <RowText
          messageOne={weather[0]?.description}
          messageTwo={weatherType[weatherCondition]?.message}
          messageOneStyles={[description, textShadow]}
          messageTwoStyles={[message, textShadow]}
          containerStyles={bodyWrapper}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "lightgrey",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  tempStyle: {
    color: "white",
    fontSize: 48,
    textAlign: "center",
    marginTop: 10,
  },
  feels: {
    fontSize: 30,
    color: "white",
  },
  highLow: {
    color: "white",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
    gap: 5,
  },
  bodyWrapper: {
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
    color: "white",
    textTransform: "capitalize",
    marginHorizontal: 20,
  },
  message: {
    fontSize: 30,
    color: "white",
    marginHorizontal: 20,
  },
  textShadow: {
    textShadowColor: "black",
    textShadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
  },
  icon: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
  },
});
