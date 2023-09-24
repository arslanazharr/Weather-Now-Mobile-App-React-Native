import * as Location from "expo-location";
import { useState, useEffect } from "react";

import { WEATHER_API_KEY, WEATHER_API_URL } from "@env";

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  console.log("weather", weather);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const data = await res.json();

      setWeather(data);
    } catch (error) {
      setError("Could not fetch weather");
    } finally {
      setLoading(false);
    }
  };

  const refreshData = async () => {
    await fetchWeatherData();
  };

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("permission to access location was denied");
        return;
      }
      var location = await Location.getCurrentPositionAsync({});

      const { latitude, longitude } = location.coords;

      setLat(latitude);
      setLon(longitude);

      await fetchWeatherData();
    };
    getLocation();
  }, []);

  return [loading, error, weather, refreshData];
};
