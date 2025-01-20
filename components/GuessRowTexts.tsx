import { Guess } from "@/screens/GameScreen";
import React, { FC } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export const colors = {
  goldenYellow: "#ddb52f",
  darkRed: "#4e0329",
};

type GuessRowTextsProps = {
  guess: Guess;
};

const GuessRowTexts: FC<GuessRowTextsProps> = ({ guess }) => {
  return (
    <View style={styles.row}>
      <Text>{`#${guess.id}`}</Text>
      <Text>{`Opponent's Guess: ${guess.text}`}</Text>
    </View>
  );
};

export default GuessRowTexts;

const styles = StyleSheet.create({
  row: {
    backgroundColor: colors.goldenYellow,
    borderWidth: 2,
    borderColor: colors.darkRed,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
