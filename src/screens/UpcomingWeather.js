import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";

const DATA = [
  {
    id: 1,
    dt_txt: "2023-09-22 12 AM",
    main: {
      temp_min: "4°",
      temp_max: "9°",
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
  {
    id: 2,
    dt_txt: "2023-09-23 12 AM", // Different date and time
    main: {
      temp_min: "2°", // Different temperature values
      temp_max: "10°",
    },
    weather: [
      {
        main: "Partly Cloudy", // Different weather condition
      },
    ],
  },
  {
    id: 3,
    dt_txt: "2023-09-24 12 AM", // Different date and time
    main: {
      temp_min: "7°", // Different temperature values
      temp_max: "8°",
    },
    weather: [
      {
        main: "Sunny", // Different weather condition
      },
    ],
  },
];

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather.main}
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
        <Text>Upcoming Weather!</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#89CFF0",
  },

  bgImage: {
    flex: 1,
  },
});

export default UpcomingWeather;
