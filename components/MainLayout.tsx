import React, { FC } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import AccentBoxWithChild from "./AccentBox";

export const colors = {
  transparentYellow: "rgba(255, 215, 0, 0.3)",
  goldenYellow: "#ddb52f",
  darkRed: "#4e0329",
  lightRed: "#A52A2A",
  white: "#FFFFFF",
};

type MainLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", gap: 30 }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
        {children}
      </View>
    </View>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    padding: 50,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 400,
  },
  header: {
    width: "100%",
    borderWidth: 2,
    borderColor: colors.white,
    padding: 10,
  },
  headerText: {
    fontSize: 36,
    color: colors.white,
    textAlign: "center",
  },
});
