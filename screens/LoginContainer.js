import React, { useState, useCallback } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
  View,
  Modal,
  Linking,
} from "react-native";
import { Image } from "expo-image";
import Loginsuccesfuly from "../components/Loginsuccesfuly";
import { FontSize, Padding, Color, Border, FontFamily } from "../GlobalStyles";

const LoginContainer = () => {
  const [loginbuttonVisible, setLoginbuttonVisible] = useState(false);

  const openLoginbutton = useCallback(() => {
    setLoginbuttonVisible(true);
  }, []);

  const closeLoginbutton = useCallback(() => {
    setLoginbuttonVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.loginContainer, styles.containerFlexBox]}>
        <View style={styles.login}>
          <View style={[styles.container, styles.containerFlexBox]}>
            <View style={styles.loginContent}>
              <Text style={styles.fuCafeteriaPos}>FU Cafeteria POS</Text>
              <Image
                style={[styles.loginContentChild, styles.index1IconPosition]}
                contentFit="cover"
                source={require("../assets/line-3.png")}
              />
              <TextInput
                style={[styles.enteruserid, styles.enteruseridBorder]}
                placeholder="Enter user ID"
                keyboardType="default"
                multiline={false}
                placeholderTextColor="#8692a6"
              />
              <TextInput
                style={[styles.enterpassword, styles.loginbuttonPosition]}
                placeholder="Enter password"
                autoCapitalize="sentences"
                multiline={false}
                secureTextEntry={true}
                placeholderTextColor="#8692a6"
              />
              <TouchableOpacity
                style={[styles.loginbutton, styles.loginbuttonPosition]}
                activeOpacity={0.05}
                onPress={openLoginbutton}
              >
                <Text style={styles.login1}>Login</Text>
              </TouchableOpacity>
              <Pressable
                style={styles.forgotPassword}
                onPress={() => Linking.openURL("www.foundationu.com")}
              >
                <Text style={styles.forgotPassword1}>Forgot Password</Text>
              </Pressable>
              <Text style={[styles.userId, styles.userIdTypo]}>User ID:</Text>
              <Text style={[styles.password, styles.userIdTypo]}>
                Password:
              </Text>
              <Image
                style={[styles.index1Icon, styles.index1IconPosition]}
                contentFit="cover"
                source={require("../assets/index-12.png")}
              />
            </View>
          </View>
          <View style={styles.loginFooter}>
            <Text style={styles.copyright2023Container}>
              <Text style={styles.copyright2023Container1}>
                <Text
                  style={styles.copyright2023}
                >{`Copyright © 2023 - 2024 `}</Text>
                <Text style={styles.foundationUniversity}>
                  Foundation University
                </Text>
                <Text style={styles.copyright2023}> - CCS Department</Text>
              </Text>
            </Text>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={loginbuttonVisible}>
        <View style={styles.loginbuttonOverlay}>
          <Pressable style={styles.loginbuttonBg} onPress={closeLoginbutton} />
          <Loginsuccesfuly onClose={closeLoginbutton} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  containerFlexBox: {
    alignItems: "center",
    flex: 1,
  },
  index1IconPosition: {
    left: "50%",
    position: "absolute",
  },
  enteruseridBorder: {
    fontSize: FontSize.size_mini,
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    fontFamily: FontFamily.interRegular,
    flexDirection: "row",
  },
  loginbuttonPosition: {
    height: 38,
    marginLeft: -147,
    left: "50%",
    position: "absolute",
    width: 294,
    alignItems: "center",
  },
  userIdTypo: {
    height: 14,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 0,
    transform: [
      {
        rotate: "0.01deg",
      },
    ],
    fontSize: FontSize.size_xs,
    display: "flex",
    position: "absolute",
    alignItems: "center",
  },
  fuCafeteriaPos: {
    marginLeft: -131,
    top: 115,
    fontSize: FontSize.size_11xl,
    width: 266,
    height: 30,
    display: "flex",
    textAlign: "center",
    color: Color.colorBrown,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  loginContentChild: {
    marginLeft: -146,
    top: 152,
    width: 292,
    height: 3,
  },
  enteruserid: {
    top: 230,
    height: 37,
    marginLeft: -147,
    fontSize: FontSize.size_mini,
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    left: "50%",
    position: "absolute",
    width: 294,
    alignItems: "center",
  },
  enterpassword: {
    top: 344,
    fontSize: FontSize.size_mini,
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    fontFamily: FontFamily.interRegular,
    flexDirection: "row",
  },
  loginbuttonOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  loginbuttonBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  login1: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.h2Regular,
    color: Color.white,
    textAlign: "center",
    fontWeight: "700",
  },
  loginbutton: {
    marginTop: 209.54,
    top: "50%",
    borderRadius: 6,
    backgroundColor: Color.colorBrown,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    justifyContent: "center",
  },
  forgotPassword1: {
    textDecoration: "underline",
    color: Color.colorDarkslateblue,
    textAlign: "right",
    transform: [
      {
        rotate: "0.01deg",
      },
    ],
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
  },
  forgotPassword: {
    top: 389,
    right: 1,
    position: "absolute",
  },
  userId: {
    top: 211,
    width: 80,
  },
  password: {
    top: 324,
    width: 98,
  },
  index1Icon: {
    marginLeft: -49,
    top: 0,
    width: 99,
    height: 90,
  },
  loginContent: {
    height: 496,
    width: 294,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  copyright2023: {
    color: Color.white,
    fontFamily: FontFamily.interRegular,
  },
  foundationUniversity: {
    color: Color.colorBrown,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  copyright2023Container1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  copyright2023Container: {
    width: 403,
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  loginFooter: {
    backgroundColor: "#343a40",
    height: 50,
    paddingHorizontal: 160,
    paddingVertical: Padding.p_3xs,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  login: {
    backgroundColor: Color.colorGray_100,
    justifyContent: "flex-end",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  loginContainer: {
    backgroundColor: Color.white,
    height: 834,
    justifyContent: "space-between",
    overflow: "hidden",
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
});

export default LoginContainer;
