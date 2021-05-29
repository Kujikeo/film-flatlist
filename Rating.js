import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";

export default function Rating({ rating }) {
  const filledStars = Math.floor(rating / 2);
  const maxStars = Array(5 - filledStars).fill("staro");
  const r = [...Array(filledStars).fill("star"), ...maxStars];
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.rating}>
      <Text style={styles.ratingNumber}>{rating}</Text>
      {r.map((type, index) => {
        return <AntDesign key={index} name={type} size={12} color="tomato" />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  ratingNumber: {
    marginRight: 4,
    fontFamily: "Roboto_500Medium",
    fontSize: 14,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,
  },
});
