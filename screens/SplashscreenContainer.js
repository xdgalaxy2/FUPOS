import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const SplashscreenContainer = () => {
  return (
    <View style={[styles.splashscreenContainer, styles.splashscreenFlexBox1]}>
      <View style={[styles.splashscreen, styles.splashscreenFlexBox]}>
        <Image
          style={[styles.splashscreenChild, styles.splashscreenFlexBox]}
          contentFit="cover"
          source={require("../assets/frame-11964.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  splashscreenFlexBox1: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  splashscreenFlexBox: {
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  splashscreenChild: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    alignSelf: "stretch",
  },
  splashscreen: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.white,
    alignSelf: "stretch",
  },
  splashscreenContainer: {
    height: 834,
    overflow: "hidden",
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default SplashscreenContainer;
