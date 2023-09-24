import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ErrorPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>Sorry something went wrong</Text>
      <MaterialCommunityIcons
        name="emoticon-dead-outline"
        size={70}
        color="black"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  errorMessage: {
    textAlign: "center",
    color: "black",
    fontSize: 30,
    marginHorizontal: 10,
  },
});

export default ErrorPage;
