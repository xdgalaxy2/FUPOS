import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Loginsuccesfuly = ({ onClose }) => {
  return (
    <View style={[styles.loginsuccesfuly, styles.groupIconLayout]}>
      <Text style={styles.loginSuccessful}>Login Successful</Text>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  loginSuccessful: {
    marginLeft: -77,
    top: 138,
    left: "50%",
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.h2Regular,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  groupIcon: {
    height: "33.33%",
    width: "33.33%",
    top: "25.67%",
    right: "32%",
    bottom: "41%",
    left: "34.67%",
    overflow: "hidden",
    position: "absolute",
  },
  loginsuccesfuly: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
    width: 200,
    height: 200,
  },
});

export default Loginsuccesfuly;
