import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TextInput,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Cashoutdrawer1 from "../components/Cashoutdrawer1";
import { Padding, FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const MenuMinContainer = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [logoutVisible, setLogoutVisible] = useState(false);

  const openLogout = useCallback(() => {
    setLogoutVisible(true);
  }, []);

  const closeLogout = useCallback(() => {
    setLogoutVisible(false);
  }, []);

  return (
    <>
      <View style={styles.menuMinContainer}>
        <View style={styles.menuMin}>
          <View style={styles.submenuMenu}>
            <View style={styles.frame}>
              <View style={styles.frame1}>
                <Pressable
                  style={styles.frame2}
                  onPress={() => navigation.navigate("DashboardMin")}
                >
                  <Image
                    style={styles.expandLeftDoubleIcon}
                    contentFit="cover"
                    source={require("../assets/expand-left-double.png")}
                  />
                </Pressable>
                <View style={styles.frame2}>
                  <Pressable
                    style={styles.sort}
                    onPress={() => navigation.navigate("MenuOpenContainer")}
                  >
                    <Image
                      style={styles.icon}
                      contentFit="cover"
                      source={require("../assets/sort3.png")}
                    />
                  </Pressable>
                </View>
              </View>
              <View style={[styles.dishesParent, styles.parentFlexBox]}>
                <View style={[styles.dishes, styles.dishesSpaceBlock]}>
                  <View style={styles.menu}>
                    <Image
                      style={styles.menuChild}
                      contentFit="cover"
                      source={require("../assets/frame-32.png")}
                    />
                    <Text style={[styles.dishes1, styles.drinksTypo]}>
                      Dishes
                    </Text>
                  </View>
                </View>
                <View style={[styles.dashboard, styles.candiesLayout]}>
                  <Image
                    style={styles.dashboardChild}
                    contentFit="cover"
                    source={require("../assets/frame-31.png")}
                  />
                  <Text style={[styles.drinks, styles.drinksTypo]}>Drinks</Text>
                </View>
                <View style={[styles.orderReport, styles.candiesLayout]}>
                  <Image
                    style={styles.orderReportChild}
                    contentFit="cover"
                    source={require("../assets/frame-301.png")}
                  />
                  <Text style={[styles.desserts, styles.drinksTypo]}>
                    Desserts
                  </Text>
                </View>
                <View style={[styles.settings, styles.candiesLayout]}>
                  <Image
                    style={[styles.settingsChild, styles.childLayout]}
                    contentFit="cover"
                    source={require("../assets/frame-29.png")}
                  />
                  <Text style={[styles.snacks, styles.drinksTypo]}>Snacks</Text>
                </View>
                <View style={[styles.candies, styles.candiesLayout]}>
                  <Image
                    style={styles.candiesChild}
                    contentFit="cover"
                    source={require("../assets/frame-281.png")}
                  />
                  <Text style={[styles.desserts, styles.drinksTypo]}>
                    Candies
                  </Text>
                </View>
              </View>
              <View style={[styles.frameParent, styles.parentFlexBox]}>
                <View
                  style={[
                    styles.userCicrleDuotoneLineParent,
                    styles.logoutLayout,
                  ]}
                >
                  <Image
                    style={[
                      styles.userCicrleDuotoneLineIcon,
                      styles.iconPosition,
                    ]}
                    contentFit="cover"
                    source={require("../assets/user-cicrle-duotone-line.png")}
                  />
                  <Text style={[styles.manager, styles.managerPosition]}>
                    Manager
                  </Text>
                </View>
                <Pressable
                  style={[styles.logout, styles.logoutLayout]}
                  onPress={openLogout}
                >
                  <Text style={[styles.logout1, styles.managerPosition]}>
                    Logout
                  </Text>
                  <Image
                    style={[styles.logoutIcon, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/logout.png")}
                  />
                </Pressable>
              </View>
            </View>
          </View>
          <View style={[styles.containerOpen, styles.dishesSpaceBlock]}>
            <View style={[styles.containerMenu, styles.containerSpaceBlock]}>
              <TextInput
                style={styles.containerMenuChild}
                placeholder="🔍 Search"
                placeholderTextColor="#000"
              />
              <View style={styles.subMenu}>
                <View style={[styles.dishes01, styles.dishesLayout]}>
                  <Text style={[styles.burgerPatty, styles.camoteCueTypo]}>
                    Burger Patty
                  </Text>
                  <View style={styles.frame4}>
                    <Text style={[styles.text, styles.textTypo2]}>₱ 13.40</Text>
                  </View>
                  <View style={[styles.frame5, styles.dishesSpaceBlock]}>
                    <View style={styles.quanitity}>
                      <Text style={[styles.text1, styles.textPosition]}>1</Text>
                      <Image
                        style={[styles.quanitityChild, styles.iconPosition]}
                        contentFit="cover"
                        source={require("../assets/frame-11962.png")}
                      />
                      <Image
                        style={styles.quanitityItem}
                        contentFit="cover"
                        source={require("../assets/frame-11963.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.dishes011, styles.dishesLayout]}>
                  <Text style={[styles.camoteCue, styles.camoteCueTypo]}>
                    Camote Cue
                  </Text>
                  <View style={styles.frame4}>
                    <Text style={[styles.text2, styles.textTypo2]}>
                      ₱ 13.40
                    </Text>
                  </View>
                  <View style={[styles.frame5, styles.dishesSpaceBlock]}>
                    <View style={styles.quanitity}>
                      <Text style={[styles.text3, styles.textPosition]}>1</Text>
                      <Image
                        style={[styles.quanitityChild, styles.iconPosition]}
                        contentFit="cover"
                        source={require("../assets/frame-119621.png")}
                      />
                      <Image
                        style={styles.quanitityItem}
                        contentFit="cover"
                        source={require("../assets/frame-119631.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.dishes012, styles.dishesLayout]}>
                  <Text style={[styles.burgerPatty, styles.camoteCueTypo]}>
                    Combo Banana
                  </Text>
                  <View style={styles.frame4}>
                    <Text style={[styles.text, styles.textTypo2]}>₱ 13.40</Text>
                  </View>
                  <View style={[styles.frame5, styles.dishesSpaceBlock]}>
                    <View style={styles.quanitity}>
                      <Text style={[styles.text1, styles.textPosition]}>1</Text>
                      <Image
                        style={[styles.quanitityChild, styles.iconPosition]}
                        contentFit="cover"
                        source={require("../assets/frame-11962.png")}
                      />
                      <Image
                        style={styles.quanitityItem}
                        contentFit="cover"
                        source={require("../assets/frame-11963.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.dishes013, styles.dishesLayout]}>
                  <Text style={[styles.burgerPatty, styles.camoteCueTypo]}>
                    Chicken Nuggets
                  </Text>
                  <View style={styles.frame4}>
                    <Text style={[styles.text, styles.textTypo2]}>₱ 13.40</Text>
                  </View>
                  <View style={[styles.frame5, styles.dishesSpaceBlock]}>
                    <View style={styles.quanitity}>
                      <Text style={[styles.text1, styles.textPosition]}>1</Text>
                      <Image
                        style={[styles.quanitityChild, styles.iconPosition]}
                        contentFit="cover"
                        source={require("../assets/frame-11962.png")}
                      />
                      <Image
                        style={styles.quanitityItem}
                        contentFit="cover"
                        source={require("../assets/frame-11963.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[styles.containerProcess, styles.containerProcessLayout]}
            >
              <View style={styles.containerOrder}>
                <Text style={[styles.order, styles.orderFlexBox]}>Order</Text>
              </View>
              <View
                style={[
                  styles.burgerPattyParent,
                  styles.containerProcessLayout,
                ]}
              >
                <View style={styles.burgerPatty1ShadowBox}>
                  <View style={styles.frame12}>
                    <Text style={[styles.burgerPatty2, styles.text17Typo]}>
                      Burger Patty
                    </Text>
                    <View style={styles.forCounter}>
                      <Text style={[styles.text8, styles.textTypo1]}>1</Text>
                      <Image
                        style={[styles.forCounterChild, styles.forLayout]}
                        contentFit="cover"
                        source={require("../assets/frame-11958.png")}
                      />
                      <Image
                        style={[styles.forCounterItem, styles.forLayout]}
                        contentFit="cover"
                        source={require("../assets/frame-11957.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.frameGroup}>
                    <View style={[styles.frame13, styles.framePosition]}>
                      <Image
                        style={styles.removeIcon}
                        contentFit="cover"
                        source={require("../assets/remove.png")}
                      />
                    </View>
                    <View style={[styles.frame14, styles.framePosition]}>
                      <Text
                        style={[styles.text9, styles.textTypo1]}
                      >{`₱ `}</Text>
                      <Text style={[styles.text10, styles.textTypo1]}>
                        10.20
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.chickenNuggets1, styles.burgerPatty1ShadowBox]}
                >
                  <View style={styles.frame12}>
                    <Text style={[styles.burgerPatty2, styles.text17Typo]}>
                      Chicken Nuggets
                    </Text>
                    <View style={styles.forCounter}>
                      <Text style={[styles.text8, styles.textTypo1]}>1</Text>
                      <Image
                        style={[styles.forCounterChild, styles.forLayout]}
                        contentFit="cover"
                        source={require("../assets/frame-11958.png")}
                      />
                      <Image
                        style={[styles.forCounterItem, styles.forLayout]}
                        contentFit="cover"
                        source={require("../assets/frame-11957.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.frameGroup}>
                    <View style={[styles.frame13, styles.framePosition]}>
                      <Image
                        style={styles.removeIcon}
                        contentFit="cover"
                        source={require("../assets/remove.png")}
                      />
                    </View>
                    <View style={[styles.frame14, styles.framePosition]}>
                      <Text
                        style={[styles.text9, styles.textTypo1]}
                      >{`₱ `}</Text>
                      <Text style={[styles.text10, styles.textTypo1]}>
                        13.40
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.comboBanana1, styles.burgerPatty1ShadowBox]}
                >
                  <View style={styles.frame12}>
                    <Text style={[styles.comboBanana2, styles.text17Typo]}>
                      Combo Banana
                    </Text>
                    <View style={styles.forCounter2}>
                      <Text style={[styles.text8, styles.textTypo1]}>1</Text>
                      <Image
                        style={[styles.forCounterChild, styles.forLayout]}
                        contentFit="cover"
                        source={require("../assets/frame-11958.png")}
                      />
                      <Image
                        style={[styles.forCounterItem, styles.forLayout]}
                        contentFit="cover"
                        source={require("../assets/frame-11957.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.frameGroup}>
                    <View style={[styles.frame13, styles.framePosition]}>
                      <Image
                        style={styles.removeIcon}
                        contentFit="cover"
                        source={require("../assets/remove.png")}
                      />
                    </View>
                    <View style={[styles.frame14, styles.framePosition]}>
                      <Text
                        style={[styles.text9, styles.textTypo1]}
                      >{`₱ `}</Text>
                      <Text style={[styles.text10, styles.textTypo1]}>
                        13.40
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.frameWrapper, styles.frameLayout]}>
                  <View style={styles.frame21}>
                    <View style={styles.subtotalParent}>
                      <Text style={[styles.subtotal, styles.totalTypo]}>
                        Subtotal
                      </Text>
                      <View style={styles.wrapper}>
                        <Text style={[styles.text17, styles.textTypo]}>
                          ₱ 62.40
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.frameChild, styles.frameBorder]} />
                    <View style={styles.subtotalParent}>
                      <Text style={[styles.total, styles.totalTypo]}>
                        Total
                      </Text>
                      <View style={styles.container}>
                        <Text style={[styles.text17, styles.textTypo]}>
                          ₱ 62.40
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.frameItem, styles.frameBorder]} />
                    <View
                      style={[styles.receivedParent, styles.receivedLayout]}
                    >
                      <Text style={[styles.received, styles.receivedLayout]}>
                        Received
                      </Text>
                      <TextInput
                        style={[styles.frameInner, styles.receivedLayout]}
                        placeholder="₱ "
                        keyboardType="phone-pad"
                        placeholderTextColor="#000"
                      />
                    </View>
                    <View style={styles.subtotalParent}>
                      <Text style={[styles.change, styles.totalTypo]}>
                        Change
                      </Text>
                      <View style={styles.wrapper1}>
                        <Text style={[styles.text19, styles.textTypo]}>
                          ₱ 437.6
                        </Text>
                      </View>
                    </View>
                    <View style={styles.paymentmethod}>
                      <Pressable
                        style={[styles.cashpayment, styles.creditBorder]}
                      >
                        <View style={styles.ellipseParent}>
                          <Image
                            style={[styles.ellipseIcon, styles.iconPosition]}
                            contentFit="cover"
                            source={require("../assets/ellipse-6.png")}
                          />
                          <Text style={[styles.text20, styles.text20Position]}>
                            ₱
                          </Text>
                        </View>
                        <Text style={[styles.cash, styles.cashTypo]}>Cash</Text>
                      </Pressable>
                      <Pressable style={[styles.credit, styles.creditBorder]}>
                        <View style={styles.creditCard}>
                          <Image
                            style={styles.creditCardChild}
                            contentFit="cover"
                            source={require("../assets/frame-11954.png")}
                          />
                          <Text
                            style={[styles.credit1, styles.cashTypo]}
                          >{`Credit `}</Text>
                        </View>
                      </Pressable>
                      <Image
                        style={styles.gcashpaymentIcon}
                        contentFit="cover"
                        source={require("../assets/gcashpayment.png")}
                      />
                    </View>
                    <View style={styles.placeorderbutton}>
                      <Text style={[styles.placeOrder, styles.totalTypo]}>
                        Place Order
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={logoutVisible}>
        <View style={styles.logoutOverlay}>
          <Pressable style={styles.logoutBg} onPress={closeLogout} />
          <Cashoutdrawer1 onClose={closeLogout} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    marginTop: 63.5,
    alignSelf: "stretch",
    alignItems: "center",
  },
  dishesSpaceBlock: {
    paddingVertical: Padding.p_0,
    alignSelf: "stretch",
  },
  drinksTypo: {
    display: "none",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.h2Regular,
  },
  candiesLayout: {
    marginTop: 29,
    height: 38,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  childLayout: {
    width: 25,
    height: 23,
  },
  logoutLayout: {
    width: 38,
    borderStyle: "solid",
  },
  iconPosition: {
    top: "50%",
    position: "absolute",
  },
  managerPosition: {
    width: 60,
    top: "50%",
    position: "absolute",
    display: "none",
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.h2Regular,
  },
  containerSpaceBlock: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_0,
  },
  dishesLayout: {
    maxHeight: 140,
    maxWidth: 170,
    minHeight: 140,
    minWidth: 140,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xs,
    height: 140,
    width: 170,
    borderColor: Color.colorWhitesmoke_200,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "space-between",
  },
  camoteCueTypo: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.h2Regular,
    alignSelf: "stretch",
    flex: 1,
  },
  textTypo2: {
    width: 58,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.h2Regular,
    fontSize: FontSize.size_mini,
  },
  textPosition: {
    width: 8,
    fontSize: 14,
    marginLeft: -4.53,
    marginTop: -7.58,
    textAlign: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
    fontFamily: FontFamily.h2Regular,
  },
  containerProcessLayout: {
    width: 258,
    alignItems: "center",
  },
  orderFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  text17Typo: {
    letterSpacing: 0.3,
    fontSize: FontSize.h2Regular_size,
    color: Color.colorBlack,
  },
  textTypo1: {
    color: Color.black,
    fontSize: FontSize.h2Regular_size,
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.h2Regular,
  },
  forLayout: {
    width: 26,
    height: 25,
    top: 0,
    position: "absolute",
  },
  framePosition: {
    left: -6,
    position: "absolute",
    overflow: "hidden",
  },
  burgerPatty1ShadowBox: {
    height: 60,
    backgroundColor: Color.colorGray_600,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_8xs,
    alignSelf: "stretch",
  },
  frameLayout: {
    borderRadius: Border.br_8xs,
    flexDirection: "row",
  },
  totalTypo: {
    display: "flex",
    fontFamily: FontFamily.sFProDisplayRegular,
    fontSize: FontSize.size_lg,
  },
  textTypo: {
    textAlign: "right",
    fontFamily: FontFamily.sFProDisplayRegular,
    right: 0,
    position: "absolute",
  },
  frameBorder: {
    borderRadius: 0.001,
    borderColor: Color.colorBlack,
    borderStyle: "dashed",
    borderWidth: 1,
    alignSelf: "stretch",
  },
  receivedLayout: {
    height: 31,
    alignItems: "center",
  },
  creditBorder: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_2xl,
    borderColor: Color.colorSilver,
    height: 34,
    width: 70,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  text20Position: {
    textAlign: "center",
    fontWeight: "700",
    left: "50%",
    top: "50%",
    position: "absolute",
    color: Color.white,
  },
  cashTypo: {
    fontSize: FontSize.size_5xs,
    color: Color.colorBlack,
    textAlign: "center",
    fontWeight: "700",
    fontFamily: FontFamily.h2Regular,
  },
  expandLeftDoubleIcon: {
    maxHeight: "100%",
    width: 30,
    flex: 1,
  },
  frame2: {
    height: 30,
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  sort: {
    width: 31,
    height: 30,
  },
  frame1: {
    height: 100,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  menuChild: {
    width: 20,
    height: 20,
  },
  dishes1: {
    marginLeft: 20,
  },
  menu: {
    width: 89,
    height: 21,
    flexDirection: "row",
    alignItems: "center",
  },
  dishes: {
    backgroundColor: Color.colorGray_300,
    paddingHorizontal: 11,
    justifyContent: "center",
    height: 38,
    borderRadius: Border.br_3xs,
    paddingVertical: Padding.p_0,
    overflow: "hidden",
  },
  dashboardChild: {
    height: 22,
    width: 17,
  },
  drinks: {
    marginLeft: 23,
  },
  dashboard: {
    paddingHorizontal: 12,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
  },
  orderReportChild: {
    width: 21,
    height: 28,
  },
  desserts: {
    marginLeft: 21,
  },
  orderReport: {
    paddingTop: 7,
    paddingBottom: 7,
    paddingHorizontal: 11,
  },
  settingsChild: {
    height: 23,
  },
  snacks: {
    marginLeft: 18,
  },
  settings: {
    padding: Padding.p_5xs,
    alignItems: "center",
  },
  candiesChild: {
    width: 27,
    height: 26,
  },
  candies: {
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: 11,
  },
  dishesParent: {
    height: 316,
  },
  userCicrleDuotoneLineIcon: {
    marginTop: -20.5,
    marginLeft: -18.5,
    width: 37,
    height: 41,
    left: "50%",
  },
  manager: {
    marginTop: -7,
    left: 43,
    fontSize: FontSize.size_xs,
    height: 14,
  },
  userCicrleDuotoneLineParent: {
    borderColor: Color.white,
    borderWidth: 1,
    width: 38,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    height: 38,
  },
  logoutOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  logoutBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  logout1: {
    marginTop: -10,
    left: 62,
    fontSize: FontSize.size_lg,
    height: 20,
  },
  logoutIcon: {
    marginTop: -12,
    marginLeft: -12,
    width: 24,
    height: 24,
    left: "50%",
    overflow: "hidden",
  },
  logout: {
    borderColor: Color.colorMaroon,
    borderWidth: 2,
    height: 37,
    width: 38,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  frameParent: {
    height: 95,
    justifyContent: "space-between",
  },
  frame: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  submenuMenu: {
    width: 78,
    padding: Padding.p_lg,
    backgroundColor: Color.colorBrown,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  containerMenuChild: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontWeight: "300",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_8xs,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.h2Regular,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  burgerPatty: {
    fontWeight: "700",
    color: Color.white,
  },
  text: {
    color: Color.colorGray_500,
  },
  frame4: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  text1: {
    color: Color.white,
  },
  quanitityChild: {
    marginTop: -11.5,
    left: 0,
    height: 23,
    width: 25,
  },
  quanitityItem: {
    right: 0,
    top: 0,
    position: "absolute",
    height: 23,
    width: 25,
  },
  quanitity: {
    width: 83,
    height: 23,
  },
  frame5: {
    paddingHorizontal: 0,
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
  },
  dishes01: {
    backgroundColor: Color.colorFirebrick_100,
    maxHeight: 140,
    maxWidth: 170,
    minHeight: 140,
    minWidth: 140,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xs,
    height: 140,
    width: 170,
    borderColor: Color.colorWhitesmoke_200,
  },
  camoteCue: {
    color: Color.colorBlack,
    fontWeight: "700",
  },
  text2: {
    color: Color.colorGray_400,
  },
  text3: {
    color: Color.colorBlack,
  },
  dishes011: {
    backgroundColor: Color.white,
  },
  dishes012: {
    backgroundColor: Color.colorFirebrick_100,
    maxHeight: 140,
    maxWidth: 170,
    minHeight: 140,
    minWidth: 140,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xs,
    height: 140,
    width: 170,
    borderColor: Color.colorWhitesmoke_200,
  },
  dishes013: {
    backgroundColor: Color.colorFirebrick_100,
    maxHeight: 140,
    maxWidth: 170,
    minHeight: 140,
    minWidth: 140,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xs,
    height: 140,
    width: 170,
    borderColor: Color.colorWhitesmoke_200,
  },
  subMenu: {
    flexWrap: "wrap",
    marginTop: 32,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  containerMenu: {
    maxWidth: 689,
    alignSelf: "stretch",
    flex: 1,
  },
  order: {
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    fontWeight: "700",
    fontFamily: FontFamily.h2Regular,
    textAlign: "left",
    flex: 1,
  },
  containerOrder: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  burgerPatty2: {
    height: "34.78%",
    fontFamily: FontFamily.sFProDisplayRegular,
    left: "0%",
    top: "1.63%",
    fontSize: FontSize.h2Regular_size,
    position: "absolute",
    textAlign: "left",
    width: "100%",
  },
  text8: {
    height: "63.16%",
    width: "5.42%",
    top: "16%",
    left: "47.57%",
    lineHeight: 20,
    fontWeight: "500",
  },
  forCounterChild: {
    left: 0,
  },
  forCounterItem: {
    left: 77,
  },
  forCounter: {
    top: 21,
    left: 9,
    width: 103,
    height: 25,
    position: "absolute",
  },
  frame12: {
    top: 8,
    left: 18,
    width: 129,
    height: 46,
    position: "absolute",
    overflow: "hidden",
  },
  removeIcon: {
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  frame13: {
    top: 24,
    width: 51,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  text9: {
    marginLeft: -27,
    width: 11,
    top: 0,
    left: "50%",
  },
  text10: {
    marginLeft: -16,
    width: 43,
    top: 0,
    left: "50%",
  },
  frame14: {
    width: 54,
    height: 17,
    top: 0,
  },
  frameGroup: {
    height: "64.47%",
    width: "18.6%",
    top: "14.47%",
    right: "5.32%",
    bottom: "21.05%",
    left: "76.08%",
    position: "absolute",
  },
  chickenNuggets1: {
    marginTop: 20,
  },
  comboBanana2: {
    height: "32.61%",
    fontFamily: FontFamily.sFProDisplayRegular,
    left: "0%",
    top: "1.63%",
    fontSize: FontSize.h2Regular_size,
    position: "absolute",
    textAlign: "left",
    width: "100%",
  },
  forCounter2: {
    height: "54.35%",
    width: "79.84%",
    top: "45.65%",
    right: "13.18%",
    bottom: "0%",
    left: "6.98%",
    position: "absolute",
  },
  comboBanana1: {
    marginTop: 20,
  },
  subtotal: {
    height: 18,
    fontWeight: "500",
    color: Color.colorBlack,
    textAlign: "left",
    alignItems: "center",
    flex: 1,
  },
  text17: {
    letterSpacing: 0.3,
    fontSize: FontSize.h2Regular_size,
    color: Color.colorBlack,
    top: 0,
  },
  wrapper: {
    height: 18,
    flex: 1,
  },
  subtotalParent: {
    alignItems: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  frameChild: {
    height: 0,
  },
  total: {
    width: 145,
    height: 18,
    fontWeight: "500",
    color: Color.colorBlack,
    textAlign: "left",
    alignItems: "center",
  },
  container: {
    width: 75,
    height: 18,
  },
  frameItem: {
    height: 1,
  },
  received: {
    display: "flex",
    fontFamily: FontFamily.sFProDisplayRegular,
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    color: Color.colorBlack,
    textAlign: "left",
    flex: 1,
  },
  frameInner: {
    backgroundColor: Color.colorGainsboro,
    width: 110,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_8xs,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.sFProDisplayRegular,
    fontWeight: "700",
    borderRadius: Border.br_8xs,
    flexDirection: "row",
  },
  receivedParent: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  change: {
    fontWeight: "500",
    color: Color.colorBlack,
    height: 22,
    textAlign: "left",
    alignItems: "center",
    flex: 1,
  },
  text19: {
    top: 1,
    letterSpacing: 0.4,
    color: Color.colorFirebrick_100,
    fontSize: FontSize.size_lg,
  },
  wrapper1: {
    alignSelf: "stretch",
    flex: 1,
  },
  ellipseIcon: {
    marginTop: -8.5,
    marginLeft: -8,
    height: 17,
    left: "50%",
    width: 17,
  },
  text20: {
    marginTop: -6.5,
    marginLeft: -4,
    fontSize: FontSize.size_2xs,
    width: 9,
    height: 13,
    fontFamily: FontFamily.sFProDisplayRegular,
  },
  ellipseParent: {
    height: 17,
    alignSelf: "stretch",
  },
  cash: {
    width: 28,
    height: 13,
  },
  cashpayment: {
    justifyContent: "space-between",
  },
  creditCardChild: {
    width: 14,
    height: 14,
  },
  credit1: {
    lineHeight: 14,
  },
  creditCard: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  credit: {
    justifyContent: "center",
    flexDirection: "row",
  },
  gcashpaymentIcon: {
    height: 34,
    width: 70,
    borderRadius: Border.br_8xs,
  },
  paymentmethod: {
    height: 36,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
  placeOrder: {
    marginTop: -13,
    marginLeft: -60,
    width: 120,
    textAlign: "center",
    fontWeight: "700",
    left: "50%",
    top: "50%",
    position: "absolute",
    color: Color.white,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
  },
  placeorderbutton: {
    height: 40,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorBrown,
    alignSelf: "stretch",
  },
  frame21: {
    width: 220,
    height: 278,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
  frameWrapper: {
    padding: Padding.p_xl,
    marginTop: 20,
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  burgerPattyParent: {
    height: 569,
    marginTop: 20,
  },
  containerProcess: {
    maxWidth: 258,
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_0,
    marginLeft: 20,
    overflow: "hidden",
  },
  containerOpen: {
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    flex: 1,
  },
  menuMin: {
    backgroundColor: Color.colorGray_100,
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  menuMinContainer: {
    height: 1194,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default MenuMinContainer;
