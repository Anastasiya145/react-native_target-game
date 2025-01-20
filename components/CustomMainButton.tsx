// import colors from "../app";
import { FC } from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";

export const colors = {
  transparentYellow: "rgba(255, 215, 0, 0.3)",
  goldenYellow: "#FFD700",
  darkRed: "#800000",
  lightRed: "#A52A2A",
  white: "#FFFFFF",
};

type CustomMainButtonProps = {
  onPress: () => void;
  text: string;
  disabled?: boolean;
};

const CustomMainButton: FC<CustomMainButtonProps> = ({
  onPress,
  text,
  disabled = false,
}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={(presed) =>
          presed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        disabled={disabled}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default CustomMainButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    marginHorizontal: 5,
    alignItems: "center",
    flex: 1,
  },
  buttonInnerContainer: {
    borderRadius: 20,
    backgroundColor: colors.lightRed,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
  pressed: {
    opacity: 0.75,
  },
});
