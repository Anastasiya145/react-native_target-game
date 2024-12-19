import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const colors = {
  transparentYellow: "rgba(255, 215, 0, 0.3)",
  goldenYellow: "#FFD700",
  darkRed: "#800000",
  lightRed: "#A52A2A",
  white: "#FFFFFF",
};

export default function Index() {
  const [query, setQuery] = useState("");

  const onConfirm = () => setQuery(query);

  const onReset = () => setQuery("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Guess My Number</Text>
      </View>
      <View style={styles.numberContainer}>
        <Text style={styles.numberTitle}>Enter A Number</Text>
        <TextInput
          keyboardType="numeric"
          value={query}
          onChangeText={setQuery}
          placeholder="Enter your choice"
          style={styles.input}
        />
        <View style={styles.buttonRow}>
          <Pressable onPress={onReset} style={styles.actionButton}>
            <View>
              <Text style={styles.buttonText}>Reset</Text>
            </View>
          </Pressable>
          <Pressable onPress={onConfirm} style={styles.actionButton}>
            <View>
              <Text style={styles.buttonText}>Confirm</Text>
            </View>
          </Pressable>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.transparentYellow,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    borderWidth: 2,
    // borderColor: colors.white,
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 36,
    // color: colors.white,
  },
  numberContainer: {
    backgroundColor: colors.darkRed,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: 400,
  },
  numberTitle: {
    fontSize: 24,
    color: colors.goldenYellow,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: "100%",
    color: colors.goldenYellow,
    borderRadius: 5,
    paddingHorizontal: 10,
    borderBottomColor: colors.goldenYellow,
    borderBottomWidth: 2,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  actionButton: {
    backgroundColor: colors.lightRed,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
});
