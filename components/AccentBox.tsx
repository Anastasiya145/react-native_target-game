import React, { FC } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export const colors = {
  transparentYellow: "rgba(255, 215, 0, 0.3)",
  goldenYellow: "#ddb52f",
  darkRed: "#4e0329",
  lightRed: "#A52A2A",
  white: "#FFFFFF",
};

type AccentBoxWithChildProps = {
  text: string;
  children: React.ReactNode;
};

const AccentBoxWithChild: FC<AccentBoxWithChildProps> = ({
  text,
  children,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>{text}</Text>
      {children}
    </View>
  );
};

export default AccentBoxWithChild;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkRed,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  containerText: {
    fontSize: 24,
    color: colors.goldenYellow,
  },
});
