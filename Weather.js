import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286F4"],
    title: "Thunderstorm",
    subtitle: ""
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#021B79", "#0575E6"],
    title: "Drizzle",
    subtitle: ""
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#021B79", "#0575E6"],
    title: "Rain",
    subtitle: ""
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Snow",
    subtitle: ""
  },
  Atmosphere: {
    iconName: "weather-hurricane",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Atmosphere",
    subtitle: ""
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "Clear",
    subtitle: "Go get your ass burnt"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: ""
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#556270", "#4ecdc4"],
    title: "Haze",
    subtitle: "Just don't go outside."
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#556270", "#4ecdc4"],
    title: "Mist",
    subtitle: ""
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#556270", "#4ecdc4"],
    title: "Dust",
    subtitle: ""
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.contatiner}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
};

const styles = StyleSheet.create({
  contatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "600"
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
});
