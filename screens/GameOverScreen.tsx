import CustomMainButton from "@/components/CustomMainButton";
import MainLayout from "@/components/MainLayout";
import { FC } from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export const colors = {
  transparentYellow: "rgba(255, 215, 0, 0.3)",
  goldenYellow: "#FFD700",
  darkRed: "#800000",
  lightRed: "#A52A2A",
  white: "#FFFFFF",
};

type GameOverScreenProps = {
  setScreenNumber: React.Dispatch<React.SetStateAction<number>>;
};

const GameOverScreen: FC<GameOverScreenProps> = ({ setScreenNumber }) => {
  return (
    <MainLayout title="Game Over">
      <View style={{ alignItems: "center", gap: 30 }}>
        <Image
          source={require("../assets/images/background.png")}
          style={styles.image}
        />
        <Text style={styles.text}>
          Your phone needed <Text style={styles.textAccent}>4</Text> rounds to
          guess the number <Text style={styles.textAccent}>55</Text>.
        </Text>
        <CustomMainButton
          text="Start New Game"
          onPress={() => setScreenNumber(1)}
        />
      </View>
    </MainLayout>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: "center",
  },
  textAccent: {
    color: colors.darkRed,
  },
  image: {
    borderRadius: "50%",
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: "black",
  },
});
