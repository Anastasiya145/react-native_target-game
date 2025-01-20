import { FC, useState } from "react";
import CustomMainButton from "@/components/CustomMainButton";
import { StyleSheet, Text, TextInput, View } from "react-native";
import MainLayout from "../components/MainLayout";
import AccentBoxWithChild from "@/components/AccentBox";
// import colors from "../app";

export const colors = {
  goldenYellow: "#ddb52f",
};

type StartGameScreenProps = {
  setScreenNumber: React.Dispatch<React.SetStateAction<number>>;
};

const StartGameScreen: FC<StartGameScreenProps> = ({ setScreenNumber }) => {
  const [enteredQuery, setEnteredQuery] = useState<string>("");
  const [error, setError] = useState(false);

  const setAndCheckEnteredQuery = (query: string) => {
    const queryFormatted = query.trim();

    const chosenNumber = parseInt(queryFormatted);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 100) {
      setError(true);
    } else {
      setError(false);
    }

    setEnteredQuery(queryFormatted);
  };

  const onConfirm = () => !error && setScreenNumber(2);

  const onReset = () => {
    setEnteredQuery("");
    setError(false);
  };

  return (
    <MainLayout title="Guess My Number">
      <AccentBoxWithChild text="Enter A Number">
        <View style={{ alignItems: "center" }}>
          <TextInput
            keyboardType="number-pad"
            value={enteredQuery}
            maxLength={2}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setAndCheckEnteredQuery(text)}
            style={styles.input}
          />
          {error && (
            <Text style={styles.helperText}>
              Number has to be a number 1 and 99
            </Text>
          )}
          <View style={styles.buttonRow}>
            <CustomMainButton text="Reset" onPress={onReset} />
            <CustomMainButton
              text="Confirm"
              onPress={onConfirm}
              disabled={error}
            />
          </View>
        </View>
      </AccentBoxWithChild>
    </MainLayout>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  input: {
    textAlign: "center",
    height: 40,
    fontSize: 24,
    width: "100%",
    color: colors.goldenYellow,
    borderRadius: 5,
    paddingHorizontal: 10,
    borderBottomColor: colors.goldenYellow,
    borderBottomWidth: 2,
    maxWidth: 100,
  },
  helperText: {
    color: "red",
    fontSize: 12,
  },
  buttonRow: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
