import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Border, Color, FontSize } from "../GlobalStyles";

const MenuOpenContainer = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.menuOpenContainer}>
      <View style={styles.menuOpen}>
        <View style={styles.submenuMenu}>
          <View style={styles.frame}>
            <View style={styles.frame1}>
              <View style={styles.frame2}>
                <Pressable
                  style={styles.expandLeftDouble}
                  onPress={() => navigation.navigate("DashboardOpenContainer")}
                >
                  <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require("../assets/expand-left-double.png")}
                  />
                </Pressable>
              </View>
              <View style={styles.frame3}>
                <Pressable
                  style={styles.sort}
                  onPress={() => navigation.navigate("MenuMinContainer")}
                >
                  <Image
                    style={styles.icon1}
                    contentFit="cover"
                    source={require("../assets/sort2.png")}
                  />
                </Pressable>
              </View>
              <View style={styles.frame4}>
                <Image
                  style={styles.index1Icon}
                  contentFit="cover"
                  source={require("../assets/index-13.png")}
                />
              </View>
              <View style={styles.frame5}>
                <Text style={[styles.cafeteria, styles.totalTypo]}>
                  CAFETERIA
                </Text>
              </View>
            </View>
            <View style={[styles.dishesParent, styles.dishesParentSpaceBlock]}>
              <View style={[styles.dishes, styles.dishesSpaceBlock]}>
                <View style={styles.menu}>
                  <Image
                    style={styles.menuChild}
                    contentFit="cover"
                    source={require("../assets/frame-32.png")}
                  />
                  <Text style={[styles.dishes1, styles.orderTypo]}>Dishes</Text>
                </View>
              </View>
              <View style={[styles.dashboard, styles.settingsLayout]}>
                <Image
                  style={styles.dashboardChild}
                  contentFit="cover"
                  source={require("../assets/frame-31.png")}
                />
                <Text style={[styles.drinks, styles.orderTypo]}>Drinks</Text>
              </View>
              <View style={[styles.orderReport, styles.settingsLayout]}>
                <Image
                  style={styles.orderReportChild}
                  contentFit="cover"
                  source={require("../assets/frame-30.png")}
                />
                <Text style={[styles.desserts, styles.orderTypo]}>
                  Desserts
                </Text>
              </View>
              <View style={[styles.settings, styles.settingsLayout]}>
                <Image
                  style={[styles.settingsChild, styles.childLayout]}
                  contentFit="cover"
                  source={require("../assets/frame-29.png")}
                />
                <Text style={[styles.snacks, styles.snacksTypo]}>Snacks</Text>
              </View>
              <View style={styles.candies}>
                <Image
                  style={styles.candiesChild}
                  contentFit="cover"
                  source={require("../assets/frame-28.png")}
                />
                <Text style={[styles.desserts, styles.orderTypo]}>Candies</Text>
              </View>
            </View>
            <View
              style={[
                styles.submenuButtomContainer,
                styles.dishesParentSpaceBlock,
              ]}
            >
              <View style={styles.user}>
                <View style={styles.userContainer}>
                  <Image
                    style={styles.userIcon}
                    contentFit="cover"
                    source={require("../assets/usericon.png")}
                  />
                  <Text style={styles.manager}>Manager</Text>
                </View>
              </View>
              <View style={styles.logout}>
                <View style={styles.logoutContainer}>
                  <Image
                    style={styles.logoutIcon}
                    contentFit="cover"
                    source={require("../assets/logouticon.png")}
                  />
                  <Text style={[styles.logout1, styles.snacksTypo]}>
                    Logout
                  </Text>
                </View>
              </View>
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
                <View style={styles.frame6}>
                  <Text style={[styles.text, styles.textTypo2]}>₱ 13.40</Text>
                </View>
                <View style={[styles.frame7, styles.dishesSpaceBlock]}>
                  <View style={styles.quanitity}>
                    <Text style={[styles.text1, styles.textPosition]}>1</Text>
                    <Image
                      style={[styles.quanitityChild, styles.text20Position]}
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
                <View style={styles.frame6}>
                  <Text style={[styles.text2, styles.textTypo2]}>₱ 13.40</Text>
                </View>
                <View style={[styles.frame7, styles.dishesSpaceBlock]}>
                  <View style={styles.quanitity}>
                    <Text style={[styles.text3, styles.textPosition]}>1</Text>
                    <Image
                      style={[styles.quanitityChild, styles.text20Position]}
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
                <View style={styles.frame6}>
                  <Text style={[styles.text, styles.textTypo2]}>₱ 13.40</Text>
                </View>
                <View style={[styles.frame7, styles.dishesSpaceBlock]}>
                  <View style={styles.quanitity}>
                    <Text style={[styles.text1, styles.textPosition]}>1</Text>
                    <Image
                      style={[styles.quanitityChild, styles.text20Position]}
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
                <View style={styles.frame6}>
                  <Text style={[styles.text, styles.textTypo2]}>₱ 13.40</Text>
                </View>
                <View style={[styles.frame7, styles.dishesSpaceBlock]}>
                  <View style={styles.quanitity}>
                    <Text style={[styles.text1, styles.textPosition]}>1</Text>
                    <Image
                      style={[styles.quanitityChild, styles.text20Position]}
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
              <Text style={[styles.order, styles.orderTypo]}>Order</Text>
            </View>
            <View
              style={[styles.burgerPattyParent, styles.containerProcessLayout]}
            >
              <View style={styles.burgerPatty1ShadowBox}>
                <View style={styles.frame14}>
                  <Text style={[styles.burgerPatty2, styles.text17Clr]}>
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
                <View style={styles.frameParent}>
                  <View style={[styles.frame15, styles.framePosition]}>
                    <Image
                      style={styles.removeIcon}
                      contentFit="cover"
                      source={require("../assets/remove.png")}
                    />
                  </View>
                  <View style={[styles.frame16, styles.framePosition]}>
                    <Text style={[styles.text9, styles.textTypo1]}>{`₱ `}</Text>
                    <Text style={[styles.text10, styles.textTypo1]}>10.20</Text>
                  </View>
                </View>
              </View>
              <View
                style={[styles.chickenNuggets1, styles.burgerPatty1ShadowBox]}
              >
                <View style={styles.frame14}>
                  <Text style={[styles.burgerPatty2, styles.text17Clr]}>
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
                <View style={styles.frameParent}>
                  <View style={[styles.frame15, styles.framePosition]}>
                    <Image
                      style={styles.removeIcon}
                      contentFit="cover"
                      source={require("../assets/remove.png")}
                    />
                  </View>
                  <View style={[styles.frame16, styles.framePosition]}>
                    <Text style={[styles.text9, styles.textTypo1]}>{`₱ `}</Text>
                    <Text style={[styles.text10, styles.textTypo1]}>13.40</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.comboBanana1, styles.burgerPatty1ShadowBox]}>
                <View style={styles.frame14}>
                  <Text style={[styles.comboBanana2, styles.text17Clr]}>
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
                <View style={styles.frameParent}>
                  <View style={[styles.frame15, styles.framePosition]}>
                    <Image
                      style={styles.removeIcon}
                      contentFit="cover"
                      source={require("../assets/remove.png")}
                    />
                  </View>
                  <View style={[styles.frame16, styles.framePosition]}>
                    <Text style={[styles.text9, styles.textTypo1]}>{`₱ `}</Text>
                    <Text style={[styles.text10, styles.textTypo1]}>13.40</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.frameWrapper, styles.frameFlexBox]}>
                <View style={styles.frame23}>
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
                    <Text style={[styles.total, styles.totalTypo]}>Total</Text>
                    <View style={styles.container}>
                      <Text style={[styles.text17, styles.textTypo]}>
                        ₱ 62.40
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.frameItem, styles.frameBorder]} />
                  <View style={styles.receivedParent}>
                    <Text style={[styles.received, styles.totalTypo]}>
                      Received
                    </Text>
                    <TextInput
                      style={[styles.frameInner, styles.frameFlexBox]}
                      placeholder="₱ "
                      keyboardType="phone-pad"
                      placeholderTextColor="#000"
                    />
                  </View>
                  <View style={styles.subtotalParent}>
                    <Text style={[styles.change, styles.totalTypo]}>
                      Change
                    </Text>
                    <View style={styles.frameView}>
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
                          style={[styles.ellipseIcon, styles.text20Position]}
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
                    <Text style={[styles.placeOrder, styles.text20Position]}>
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
  );
};

const styles = StyleSheet.create({
  totalTypo: {
    display: "flex",
    fontFamily: FontFamily.sFProDisplayRegular,
    alignItems: "center",
  },
  dishesParentSpaceBlock: {
    marginTop: 63.5,
    alignSelf: "stretch",
  },
  dishesSpaceBlock: {
    paddingVertical: Padding.p_0,
    alignSelf: "stretch",
  },
  orderTypo: {
    fontFamily: FontFamily.h2Regular,
    textAlign: "left",
  },
  settingsLayout: {
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
  snacksTypo: {
    marginLeft: 18,
    textAlign: "left",
    fontFamily: FontFamily.h2Regular,
    color: Color.white,
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
    textAlign: "left",
    fontFamily: FontFamily.h2Regular,
    fontWeight: "700",
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
    left: "50%",
    top: "50%",
    position: "absolute",
    fontFamily: FontFamily.h2Regular,
    textAlign: "center",
  },
  text20Position: {
    top: "50%",
    position: "absolute",
  },
  containerProcessLayout: {
    width: 258,
    alignItems: "center",
  },
  text17Clr: {
    letterSpacing: 0.3,
    color: Color.colorBlack,
    fontSize: FontSize.h2Regular_size,
  },
  textTypo1: {
    color: Color.black,
    position: "absolute",
    fontSize: FontSize.h2Regular_size,
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
  frameFlexBox: {
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo: {
    textAlign: "right",
    right: 0,
    position: "absolute",
    fontFamily: FontFamily.sFProDisplayRegular,
  },
  frameBorder: {
    borderRadius: 0.001,
    borderColor: Color.colorBlack,
    borderStyle: "dashed",
    borderWidth: 1,
    alignSelf: "stretch",
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
  cashTypo: {
    fontSize: FontSize.size_5xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.h2Regular,
    textAlign: "center",
    fontWeight: "700",
  },
  icon: {
    maxHeight: "100%",
    width: "100%",
    flex: 1,
  },
  expandLeftDouble: {
    width: 30,
  },
  frame2: {
    height: 30,
    alignSelf: "stretch",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  sort: {
    width: 31,
    height: 30,
  },
  frame3: {
    alignItems: "flex-end",
    height: 30,
    alignSelf: "stretch",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  index1Icon: {
    width: 102,
    height: 92,
  },
  frame4: {
    height: 93,
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
  cafeteria: {
    fontSize: FontSize.size_2xl,
    justifyContent: "center",
    textAlign: "center",
    color: Color.white,
    fontWeight: "700",
    letterSpacing: 0.4,
    height: 30,
    alignSelf: "stretch",
  },
  frame5: {
    height: 30,
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
  frame1: {
    height: 195,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  menuChild: {
    width: 20,
    height: 20,
  },
  dishes1: {
    marginLeft: 20,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    color: Color.white,
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
    height: 38,
    borderRadius: Border.br_3xs,
    paddingVertical: Padding.p_0,
    justifyContent: "center",
    overflow: "hidden",
  },
  dashboardChild: {
    height: 22,
    width: 17,
  },
  drinks: {
    marginLeft: 23,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    color: Color.white,
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
    textAlign: "left",
    fontSize: FontSize.size_mini,
    color: Color.white,
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
    fontSize: FontSize.size_mini,
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
    marginTop: 29,
    paddingHorizontal: 11,
    height: 38,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  dishesParent: {
    height: 316,
    alignItems: "center",
  },
  userIcon: {
    width: 33,
    height: 31,
  },
  manager: {
    marginLeft: 14,
    fontSize: FontSize.h2Regular_size,
    textAlign: "left",
    fontFamily: FontFamily.h2Regular,
    color: Color.white,
  },
  userContainer: {
    width: 149,
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_12xs,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  user: {
    borderColor: Color.white,
    height: 43,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  logoutIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  logout1: {
    fontSize: FontSize.size_lg,
  },
  logoutContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  logout: {
    borderColor: Color.colorMaroon,
    borderWidth: 2,
    marginTop: 20,
    borderStyle: "solid",
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: 11,
    height: 38,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  submenuButtomContainer: {
    justifyContent: "flex-end",
  },
  frame: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  submenuMenu: {
    width: 187,
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
    color: Color.white,
  },
  text: {
    color: Color.colorGray_500,
  },
  frame6: {
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
  frame7: {
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "flex-end",
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
    textAlign: "left",
    fontWeight: "700",
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
    left: "0%",
    top: "1.63%",
    letterSpacing: 0.3,
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.sFProDisplayRegular,
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
  frame14: {
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
  frame15: {
    top: 24,
    width: 51,
    justifyContent: "center",
    alignItems: "flex-end",
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
  frame16: {
    width: 54,
    height: 17,
    top: 0,
  },
  frameParent: {
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
    left: "0%",
    top: "1.63%",
    letterSpacing: 0.3,
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.sFProDisplayRegular,
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
    fontSize: FontSize.size_lg,
    textAlign: "left",
    flex: 1,
  },
  text17: {
    letterSpacing: 0.3,
    color: Color.colorBlack,
    fontSize: FontSize.h2Regular_size,
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
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  container: {
    width: 75,
    height: 18,
  },
  frameItem: {
    height: 1,
  },
  received: {
    fontWeight: "500",
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    height: 31,
    textAlign: "left",
    flex: 1,
  },
  frameInner: {
    backgroundColor: Color.colorGainsboro,
    width: 110,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_8xs,
    fontSize: FontSize.size_3xl,
    height: 31,
    justifyContent: "flex-end",
    fontFamily: FontFamily.sFProDisplayRegular,
    fontWeight: "700",
  },
  receivedParent: {
    height: 31,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
  change: {
    fontWeight: "500",
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    height: 22,
    textAlign: "left",
    flex: 1,
  },
  text19: {
    top: 1,
    color: Color.colorFirebrick_100,
    fontSize: FontSize.size_lg,
    letterSpacing: 0.4,
  },
  frameView: {
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
    left: "50%",
    textAlign: "center",
    color: Color.white,
    fontWeight: "700",
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
    left: "50%",
    fontSize: FontSize.size_lg,
    height: 26,
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.sFProDisplayRegular,
    alignItems: "center",
    textAlign: "center",
    color: Color.white,
    fontWeight: "700",
  },
  placeorderbutton: {
    height: 40,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorBrown,
    alignSelf: "stretch",
  },
  frame23: {
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
  menuOpen: {
    backgroundColor: Color.colorGray_100,
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  menuOpenContainer: {
    height: 834,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default MenuOpenContainer;
