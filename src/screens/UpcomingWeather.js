import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
  RefreshControl,
} from "react-native";
import ListItem from "../components/ListItem";
import { useGetWeather } from "../../hooks/useGetWeather";
import { useState } from "react";

const UpcomingWeather = ({ weatherData }) => {
  const [refresh, setRefresh] = useState(false);
  const [l, e, w, refreshData] = useGetWeather();

  const refreshApp = () => {
    setRefresh(true);
    setTimeout(async () => {
      await refreshData();
      setRefresh(false);
    }, 4000);
  };
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0]?.main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  const { container, bgImage } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={bgImage}
        source={require("../../assets/upcoming-weather.jpg")}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={() => refreshApp()}
            />
          }
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "lightgrey",
  },

  bgImage: {
    flex: 1,
  },
});

export default UpcomingWeather;
