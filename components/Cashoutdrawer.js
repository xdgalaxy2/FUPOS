import * as React from "react";
import { View, Pressable, StyleSheet, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Cashoutdrawer = ({ onClose }) => {
  return (
    <View style={styles.cashoutdrawer}>
      <Image
        style={styles.closebuttonIcon}
        contentFit="cover"
        source={require("../assets/close-round.png")}
      />
      <Text style={styles.receive}>Receive</Text>
      <TextInput
        style={styles.paymentFixed}
        placeholder="Enter Amount"
        placeholderTextColor="#818181"
      />
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.wrapper, styles.wrapperLayout2]}>
          <Text style={[styles.text, styles.textPosition]}>1</Text>
        </View>
        <Pressable style={[styles.container, styles.wrapperLayout2]}>
          <Text style={[styles.text1, styles.textPosition]}>2</Text>
        </Pressable>
        <Pressable style={[styles.frame, styles.wrapperLayout2]}>
          <Text style={[styles.text1, styles.textPosition]}>3</Text>
        </Pressable>
        <Pressable style={[styles.framePressable, styles.wrapperLayout1]}>
          <Text style={[styles.text1, styles.textPosition]}>4</Text>
        </Pressable>
        <Pressable style={[styles.wrapper1, styles.wrapperLayout1]}>
          <Text style={[styles.text1, styles.textPosition]}>5</Text>
        </Pressable>
        <Pressable style={[styles.wrapper2, styles.wrapperLayout1]}>
          <Text style={[styles.text1, styles.textPosition]}>6</Text>
        </Pressable>
        <Pressable style={[styles.wrapper3, styles.wrapperLayout]}>
          <Text style={[styles.text1, styles.textPosition]}>7</Text>
        </Pressable>
        <Pressable style={[styles.wrapper4, styles.wrapperLayout]}>
          <Text style={[styles.text1, styles.textPosition]}>8</Text>
        </Pressable>
        <Pressable style={[styles.wrapper5, styles.wrapperLayout]}>
          <Text style={[styles.text1, styles.textPosition]}>9</Text>
        </Pressable>
        <Pressable style={[styles.wrapper6, styles.wrapperLayout2]}>
          <Text style={[styles.text1, styles.textPosition]}>0</Text>
        </Pressable>
        <Image
          style={styles.backspaceIcon}
          contentFit="cover"
          source={require("../assets/backspace.png")}
        />
      </View>
      <View style={[styles.submitWrapper, styles.frameParentPosition]}>
        <Text style={styles.submit}>Submit</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    width: 252,
    left: "50%",
    position: "absolute",
  },
  wrapperLayout2: {
    height: 73,
    width: 76,
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    height: 23,
    width: 19,
    display: "flex",
    color: Color.colorBlack,
    lineHeight: 20,
    marginTop: -11.5,
    textAlign: "center",
    top: "50%",
    fontFamily: FontFamily.h2Regular,
    justifyContent: "center",
    alignItems: "center",
    fontSize: FontSize.size_11xl,
    left: "50%",
    position: "absolute",
  },
  wrapperLayout1: {
    top: 88,
    height: 73,
    width: 76,
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
  },
  wrapperLayout: {
    top: 176,
    height: 73,
    width: 76,
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
  },
  closebuttonIcon: {
    top: 10,
    left: 327,
    width: 24,
    height: 24,
    position: "absolute",
  },
  receive: {
    marginLeft: -54,
    top: 34,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.sFProDisplayRegular,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    left: "50%",
    position: "absolute",
  },
  paymentFixed: {
    top: 108,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_4xs,
    fontWeight: "500",
    minWidth: 252,
    maxWidth: 252,
    fontSize: FontSize.h2Regular_size,
    fontFamily: FontFamily.h2Regular,
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    marginLeft: -126,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  text: {
    marginLeft: -10,
  },
  wrapper: {
    left: 0,
    top: 0,
    width: 76,
  },
  text1: {
    marginLeft: -9,
  },
  container: {
    left: 89,
    top: 0,
    width: 76,
  },
  frame: {
    left: 176,
    top: 0,
    width: 76,
  },
  framePressable: {
    left: 0,
  },
  wrapper1: {
    left: 89,
  },
  wrapper2: {
    left: 176,
  },
  wrapper3: {
    left: 0,
  },
  wrapper4: {
    left: 89,
  },
  wrapper5: {
    left: 176,
  },
  wrapper6: {
    top: 264,
    left: 89,
  },
  backspaceIcon: {
    top: 281,
    left: 194,
    width: 40,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  frameParent: {
    marginTop: -148.5,
    height: 337,
    top: "50%",
    width: 252,
    marginLeft: -126,
  },
  submit: {
    textAlign: "center",
    fontSize: FontSize.h2Regular_size,
    color: Color.white,
    fontFamily: FontFamily.sFProDisplayRegular,
    fontWeight: "700",
  },
  submitWrapper: {
    marginLeft: -125,
    bottom: 33,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorBrown,
    height: 47,
    paddingHorizontal: Padding.p_43xl,
    paddingVertical: Padding.p_2xs,
    width: 252,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  cashoutdrawer: {
    backgroundColor: Color.colorDarkslategray_200,
    width: 360,
    height: 613,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
});

export default Cashoutdrawer;
