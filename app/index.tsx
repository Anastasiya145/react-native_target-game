import StartGameScreen from "@/screens/StartGameScreen";
import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "@/screens/GameScreen";
import GameOverScreen from "@/screens/GameOverScreen";
// import { StatusBar } from "expo-status-bar";

export const colors = {
  transparentYellow: "rgba(255, 215, 0, 0.3)",
  goldenYellow: "#ddb52f",
  darkRed: "#4e0329",
  lightRed: "#A52A2A",
  white: "#FFFFFF",
};

export default function Index() {
  const [screenNumber, setScreenNumber] = useState<number>(3);

  return (
    <LinearGradient
      colors={[colors.darkRed, colors.goldenYellow]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("../assets/images/background.png")}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        {screenNumber === 1 && (
          <StartGameScreen setScreenNumber={setScreenNumber} />
        )}
        {screenNumber === 2 && <GameScreen setScreenNumber={setScreenNumber} />}
        {screenNumber === 3 && (
          <GameOverScreen setScreenNumber={setScreenNumber} />
        )}
      </ImageBackground>

      {/* <StatusBar style="auto" /> */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});
