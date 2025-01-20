import { FC, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import MainLayout from "../components/MainLayout";
import CustomMainButton from "@/components/CustomMainButton";
import AccentBoxWithChild from "@/components/AccentBox";
import GuessRowTexts from "@/components/GuessRowTexts";

export const colors = {
  transparentYellow: "rgba(255, 215, 0, 0.3)",
  goldenYellow: "#FFD700",
  darkRed: "#800000",
  lightRed: "#A52A2A",
  white: "#FFFFFF",
};

export type Guess = {
  id: string;
  text: string;
};

type GameScreenProps = {
  setScreenNumber: React.Dispatch<React.SetStateAction<number>>;
};

const GameScreen: FC<GameScreenProps> = ({ setScreenNumber }) => {
  const [number, setNumber] = useState(50);

  const [guessList, setGuessList] = useState<Guess[]>([
    {
      id: "1",
      text: "57",
    },
  ]);

  return (
    <MainLayout title="Opponent's Guess">
      <View style={{ gap: 30 }}>
        <View style={styles.numberContainer}>{number}</View>

        <AccentBoxWithChild text="Higher or lower">
          <View>
            <View style={styles.buttonRow}>
              <CustomMainButton text="-" onPress={() => setNumber(49)} />
              <CustomMainButton text="+" onPress={() => setNumber(51)} />
            </View>
          </View>
        </AccentBoxWithChild>

        {guessList && (
          <View style={{ flexDirection: "column" }}>
            {guessList.map((guess) => (
              <GuessRowTexts guess={guess} />
            ))}
          </View>
        )}
      </View>
    </MainLayout>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  buttonRow: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  numberContainer: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 36,
    borderColor: colors.goldenYellow,
    color: colors.goldenYellow,
  },
});
