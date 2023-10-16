import React, { useState, useCallback } from "react";
import {
  ScrollView,
  Pressable,
  StyleSheet,
  View,
  Text,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import Cashoutdrawer1 from "../components/Cashoutdrawer1";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const DashboardMin = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState();
  const [dropdownItems, setDropdownItems] = useState([
    { value: "Today", label: "Today" },
    { value: "This Week", label: "This Week" },
    { value: "Last Week", label: "Last Week" },
    { value: "Last Moth", label: "Last Moth" },
  ]);
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
      <ScrollView
        style={styles.dashboardMin}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dashboardMinScrollViewContent}
      >
        <View style={styles.property1dashboardMenu1}>
          <Pressable
            style={[styles.frame, styles.frameLayout]}
            onPress={() => navigation.navigate("DashboardOpen")}
          >
            <Image
              style={[styles.sortIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/sort.png")}
            />
          </Pressable>
          <View style={styles.frame1}>
            <View style={styles.frame2}>
              <Image
                style={styles.index1Icon}
                contentFit="cover"
                source={require("../assets/index-1.png")}
              />
              <Text style={styles.cafeteria}>CAFETERIA</Text>
            </View>
            <View style={styles.frame3}>
              <View style={styles.dashboardParent}>
                <View style={[styles.dashboard, styles.salesLayout]}>
                  <View style={styles.menu}>
                    <Image
                      style={styles.dashboardIcon}
                      contentFit="cover"
                      source={require("../assets/dashboard.png")}
                    />
                    <Text style={[styles.dashboard1, styles.textTypo]}>
                      Dashboard
                    </Text>
                  </View>
                </View>
                <Pressable
                  style={[styles.sales, styles.salesLayout]}
                  onPress={() => navigation.navigate("MenuOpenContainer")}
                >
                  <View style={[styles.dashboard2, styles.dashboard2Position]}>
                    <Image
                      style={styles.menuIcon}
                      contentFit="cover"
                      source={require("../assets/menu.png")}
                    />
                    <Text style={[styles.sales1, styles.sales1Typo]}>
                      Sales
                    </Text>
                  </View>
                </Pressable>
                <View style={[styles.orderReport, styles.logoutLayout1]}>
                  <View
                    style={[styles.orderReport1, styles.dashboard2Position]}
                  >
                    <Image
                      style={styles.chartLightIcon}
                      contentFit="cover"
                      source={require("../assets/chart-light.png")}
                    />
                    <Text style={[styles.reports, styles.sales1Typo]}>
                      Reports
                    </Text>
                  </View>
                </View>
                <View style={[styles.settings, styles.logoutLayout1]}>
                  <View style={styles.settings1}>
                    <Image
                      style={styles.menuIcon1}
                      contentFit="cover"
                      source={require("../assets/menu1.png")}
                    />
                    <Text style={[styles.settings2, styles.textTypo]}>
                      Settings
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.frameParent}>
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
        <View style={styles.dashboardContent}>
          <View style={styles.frame4}>
            <Text style={[styles.dashboard3, styles.textClr]}>Dashboard</Text>
            <View style={styles.dropdown}>
              <DropDownPicker
                style={styles.dropdownpicker}
                open={dropdownOpen}
                setOpen={setDropdownOpen}
                value={dropdownValue}
                setValue={setDropdownValue}
                placeholder="Select Date"
                items={dropdownItems}
                labelStyle={styles.dropdownValue}
                textStyle={styles.dropdownText}
                dropDownContainerStyle={styles.dropdowndropDownContainer}
              />
            </View>
          </View>
          <View style={[styles.statsWrapper, styles.overviewSpaceBlock]}>
            <View style={styles.stats}>
              <View style={styles.stats1}>
                <Image
                  style={styles.statsIcon}
                  contentFit="cover"
                  source={require("../assets/stats.png")}
                />
                <View style={styles.parent}>
                  <Text style={[styles.text, styles.textTypo]}>
                    ₱ 12,456.00
                  </Text>
                  <Text style={[styles.totalRevenue, styles.textTypo]}>
                    Total Revenue
                  </Text>
                </View>
              </View>
              <View style={styles.statsShadowBox}>
                <Image
                  style={styles.statsIcon}
                  contentFit="cover"
                  source={require("../assets/stats1.png")}
                />
                <View style={styles.parent}>
                  <Text style={[styles.text, styles.textTypo]}>1039</Text>
                  <Text style={[styles.totalRevenue, styles.textTypo]}>
                    Paid Orders
                  </Text>
                </View>
              </View>
              <View style={styles.statsShadowBox}>
                <Image
                  style={styles.statsIcon}
                  contentFit="cover"
                  source={require("../assets/stats2.png")}
                />
                <View style={styles.parent}>
                  <Text style={[styles.text, styles.textTypo]}>840</Text>
                  <Text style={[styles.totalRevenue, styles.textTypo]}>
                    Walk-ins
                  </Text>
                </View>
              </View>
              <View style={styles.statsShadowBox}>
                <Image
                  style={styles.chartLightIcon}
                  contentFit="cover"
                  source={require("../assets/money.png")}
                />
                <View style={styles.parent}>
                  <Text style={[styles.text, styles.textTypo]}>199</Text>
                  <Text style={[styles.totalRevenue, styles.textTypo]}>
                    Cash in drawer
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.overview, styles.overviewSpaceBlock]}>
            <View style={[styles.mostlySoldItems, styles.statisticsShadowBox]}>
              <View style={styles.mostlySoldItemsParent}>
                <Text
                  style={[styles.mostlySoldItems1, styles.mostlySoldItems1Typo]}
                >
                  Mostly sold items
                </Text>
                <Text style={[styles.seeAll, styles.moreTypo]}>See All</Text>
              </View>
              <View style={styles.headerWrapper}>
                <View style={styles.header}>
                  <View style={styles.item}>
                    <Text style={[styles.item1, styles.textClr]}>Item</Text>
                  </View>
                  <View style={styles.orders}>
                    <Text style={[styles.orders1, styles.textClr]}>Orders</Text>
                  </View>
                  <View style={styles.orders}>
                    <Text style={[styles.ppu1, styles.textClr]}>PPU</Text>
                  </View>
                  <View style={styles.orders}>
                    <Text style={[styles.ppu1, styles.textClr]}>Revenue</Text>
                  </View>
                </View>
              </View>
              <View style={styles.statslist}>
                <View style={styles.statslisting01}>
                  <View style={styles.item}>
                    <Image
                      style={[styles.categoriesIcon, styles.frameLayout]}
                      contentFit="cover"
                      source={require("../assets/categories.png")}
                    />
                    <Text style={[styles.type2, styles.textClr]}>Type 2</Text>
                  </View>
                  <Text style={[styles.text4, styles.textClr]}>530</Text>
                  <Text style={[styles.text5, styles.textClr]}>₱3.99</Text>
                  <Text style={[styles.text4, styles.textClr]}>₱2114.70</Text>
                </View>
                <View style={styles.statslistChild} />
                <View style={styles.statslisting01}>
                  <View style={styles.item}>
                    <Image
                      style={[styles.categoriesIcon, styles.frameLayout]}
                      contentFit="cover"
                      source={require("../assets/categories1.png")}
                    />
                    <Text style={[styles.type2, styles.textClr]}>Type 5</Text>
                  </View>
                  <Text style={[styles.text4, styles.textClr]}>520</Text>
                  <Text style={[styles.text5, styles.textClr]}>₱2.99</Text>
                  <Text style={[styles.text4, styles.textClr]}>₱1554.80</Text>
                </View>
                <View style={styles.statslistChild} />
                <View style={styles.statslisting01}>
                  <View style={styles.item}>
                    <Image
                      style={[styles.categoriesIcon, styles.frameLayout]}
                      contentFit="cover"
                      source={require("../assets/categories2.png")}
                    />
                    <Text style={[styles.type2, styles.textClr]}>Meals</Text>
                  </View>
                  <Text style={[styles.text4, styles.textClr]}>502</Text>
                  <Text style={[styles.text5, styles.textClr]}>₱6.99</Text>
                  <Text style={[styles.text4, styles.textClr]}>₱3508.98</Text>
                </View>
                <View style={styles.statslistChild} />
                <View style={styles.statslisting01}>
                  <View style={styles.item}>
                    <Image
                      style={[styles.categoriesIcon, styles.frameLayout]}
                      contentFit="cover"
                      source={require("../assets/categories.png")}
                    />
                    <Text style={[styles.type2, styles.textClr]}>Type 1</Text>
                  </View>
                  <Text style={[styles.text4, styles.textClr]}>502</Text>
                  <Text style={[styles.text5, styles.textClr]}>₱3.99</Text>
                  <Text style={[styles.text4, styles.textClr]}>₱3508.98</Text>
                </View>
                <View style={styles.statslistChild} />
                <View style={styles.statslisting01}>
                  <View style={styles.item}>
                    <Image
                      style={[styles.categoriesIcon, styles.frameLayout]}
                      contentFit="cover"
                      source={require("../assets/categories3.png")}
                    />
                    <Text style={[styles.type2, styles.textClr]}>Type 4</Text>
                  </View>
                  <Text style={[styles.text4, styles.textClr]}>492</Text>
                  <Text style={[styles.text5, styles.textClr]}>₱3.99</Text>
                  <Text style={[styles.text4, styles.textClr]}>₱1963.08</Text>
                </View>
                <View style={styles.statslistChild} />
                <View style={styles.statslisting01}>
                  <View style={styles.item}>
                    <Image
                      style={[styles.categoriesIcon, styles.frameLayout]}
                      contentFit="cover"
                      source={require("../assets/categories4.png")}
                    />
                    <Text style={[styles.type2, styles.textClr]}>
                      Ice Cream
                    </Text>
                  </View>
                  <Text style={[styles.text4, styles.textClr]}>450</Text>
                  <Text style={[styles.text5, styles.textClr]}>₱3.99</Text>
                  <Text style={[styles.text4, styles.textClr]}>₱1795.59</Text>
                </View>
                <View style={styles.statslistChild} />
                <View style={styles.statslisting01}>
                  <View style={styles.item}>
                    <Image
                      style={[styles.categoriesIcon, styles.frameLayout]}
                      contentFit="cover"
                      source={require("../assets/categories.png")}
                    />
                    <Text style={[styles.type2, styles.textClr]}>Type 3</Text>
                  </View>
                  <Text style={[styles.text4, styles.textClr]}>450</Text>
                  <Text style={[styles.text5, styles.textClr]}>₱1.99</Text>
                  <Text style={[styles.text4, styles.textClr]}>₱895.50</Text>
                </View>
              </View>
            </View>
            <View style={[styles.statistics, styles.statisticsShadowBox]}>
              <View style={styles.mostlySoldItemsParent}>
                <Text
                  style={[
                    styles.overallStatistics,
                    styles.mostlySoldItems1Typo,
                  ]}
                >
                  Overall Statistics
                </Text>
                <Text style={[styles.more, styles.moreTypo]}>More</Text>
              </View>
              <View style={styles.chart}>
                <Image
                  style={[styles.graphIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/graph.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

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
  dropdownValue: {
    color: "#c1c1c1",
    fontFamily: "Adobe Blank",
  },
  dropdownText: {
    color: "#fff",
  },
  dropdowndropDownContainer: {
    backgroundColor: "#2e2e2e",
  },
  dashboardMinScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameLayout: {
    height: 30,
    overflow: "hidden",
    width: 30,
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  salesLayout: {
    borderRadius: Border.br_3xs,
    height: 38,
    left: 0,
    width: 40,
    overflow: "hidden",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.h2Regular,
    textAlign: "left",
    color: Color.white,
  },
  dashboard2Position: {
    left: 8,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  sales1Typo: {
    marginLeft: 12,
    textAlign: "left",
    fontFamily: FontFamily.h2Regular,
    fontSize: FontSize.size_lg,
    height: 20,
    color: Color.white,
    display: "none",
  },
  logoutLayout1: {
    height: 37,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  logoutLayout: {
    width: 38,
    borderStyle: "solid",
  },
  iconPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  managerPosition: {
    width: 60,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.h2Regular,
    color: Color.white,
    display: "none",
    position: "absolute",
  },
  textClr: {
    color: Color.colorBlack,
    fontFamily: FontFamily.h2Regular,
  },
  overviewSpaceBlock: {
    marginTop: 31,
    paddingVertical: Padding.p_0,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
  },
  statisticsShadowBox: {
    height: 462,
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    borderColor: Color.colorWhitesmoke_200,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderWidth: 1,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  mostlySoldItems1Typo: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.h2Regular,
    fontWeight: "700",
  },
  moreTypo: {
    display: "flex",
    color: Color.colorDarkslateblue,
    fontWeight: "500",
    textDecoration: "underline",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.h2Regular,
  },
  sortIcon: {
    height: "100%",
    width: "98.33%",
    top: "0%",
    right: "1.67%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  frame: {
    top: 30,
    left: 42,
    overflow: "hidden",
    position: "absolute",
  },
  index1Icon: {
    height: 91,
    width: 100,
  },
  cafeteria: {
    fontSize: FontSize.size_2xl,
    letterSpacing: 0.4,
    fontFamily: FontFamily.sFProDisplayRegular,
    marginTop: 8,
    textAlign: "center",
    color: Color.white,
    fontWeight: "700",
    width: 136,
    height: 30,
  },
  frame2: {
    height: 130,
    display: "none",
    alignItems: "center",
    width: 136,
    overflow: "hidden",
  },
  dashboardIcon: {
    width: 20,
    height: 20,
  },
  dashboard1: {
    marginLeft: 15,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    height: 20,
    width: 100,
    display: "none",
  },
  menu: {
    top: 9,
    left: 11,
    width: 133,
    height: 20,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  dashboard: {
    top: 0,
    backgroundColor: Color.colorGray_200,
    height: 38,
  },
  menuIcon: {
    width: 24,
    height: 28,
    overflow: "hidden",
  },
  sales1: {
    width: 100,
  },
  dashboard2: {
    top: 6,
    height: 28,
    width: 136,
  },
  sales: {
    top: 68,
    height: 38,
  },
  chartLightIcon: {
    height: 24,
    width: 24,
  },
  reports: {
    width: 120,
  },
  orderReport1: {
    top: 8,
    width: 134,
    height: 24,
  },
  orderReport: {
    top: 136,
    left: 0,
    height: 37,
    width: 40,
    position: "absolute",
  },
  menuIcon1: {
    width: 31,
    height: 31,
    overflow: "hidden",
  },
  settings2: {
    width: 80,
    marginLeft: 8,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    height: 20,
    display: "none",
  },
  settings1: {
    top: 4,
    left: 5,
    width: 119,
    height: 31,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  settings: {
    top: 203,
    left: 0,
    height: 37,
    width: 40,
    position: "absolute",
  },
  dashboardParent: {
    height: 237,
    width: 40,
  },
  frame3: {
    marginTop: 176,
    flexDirection: "row",
    overflow: "hidden",
  },
  userCicrleDuotoneLineIcon: {
    marginTop: -20.5,
    marginLeft: -18.5,
    width: 37,
    height: 41,
  },
  manager: {
    marginTop: -7,
    left: 43,
    height: 14,
    fontSize: FontSize.size_xs,
  },
  userCicrleDuotoneLineParent: {
    borderRadius: Border.br_11xl,
    borderColor: Color.white,
    borderWidth: 1,
    width: 38,
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
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  logout: {
    borderColor: Color.colorMaroon,
    borderWidth: 2,
    height: 37,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  frameParent: {
    justifyContent: "space-between",
    height: 95,
    width: 40,
    marginTop: 176,
    alignItems: "center",
  },
  frame1: {
    top: 100,
    left: 37,
    paddingVertical: Padding.p_12xs,
    paddingHorizontal: Padding.p_0,
    overflow: "hidden",
    position: "absolute",
  },
  property1dashboardMenu1: {
    backgroundColor: Color.colorBrown,
    width: 108,
    alignSelf: "stretch",
  },
  dashboard3: {
    fontSize: FontSize.size_21xl,
    width: 225,
    textAlign: "left",
    height: 38,
    fontWeight: "700",
  },
  dropdownpicker: {
    backgroundColor: Color.colorDarkslategray_100,
  },
  dropdown: {
    borderRadius: Border.br_5xs,
    minWidth: 125,
    minHeight: 38,
    maxWidth: 125,
    maxHeight: 38,
    undefined: "",
    justifyContent: "center",
    alignItems: "center",
  },
  frame4: {
    paddingVertical: Padding.p_0,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "space-between",
    height: 38,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  statsIcon: {
    width: 24,
    height: 20,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontWeight: "700",
  },
  totalRevenue: {
    marginTop: 5,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  parent: {
    marginTop: 10,
  },
  stats1: {
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_xs,
    height: 97,
    borderColor: Color.colorWhitesmoke_200,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.colorFirebrick_200,
    borderRadius: Border.br_9xs,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    flex: 1,
  },
  statsShadowBox: {
    marginLeft: 20,
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_xs,
    height: 97,
    borderColor: Color.colorWhitesmoke_200,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.colorFirebrick_200,
    borderRadius: Border.br_9xs,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    flex: 1,
  },
  stats: {
    height: 95,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  statsWrapper: {
    justifyContent: "space-between",
    height: 95,
    overflow: "hidden",
  },
  mostlySoldItems1: {
    width: 182,
    height: 20,
  },
  seeAll: {
    alignItems: "flex-end",
    width: 43,
    height: 20,
  },
  mostlySoldItemsParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  item1: {
    width: 139,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontWeight: "700",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  orders1: {
    width: 55,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "700",
  },
  orders: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  ppu1: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "700",
  },
  header: {
    height: 14,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  categoriesIcon: {
    overflow: "hidden",
  },
  type2: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  text4: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "700",
    flex: 1,
  },
  text5: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    flex: 1,
  },
  statslisting01: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  statslistChild: {
    borderColor: Color.colorWhitesmoke_100,
    borderTopWidth: 1,
    height: 1,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  statslist: {
    height: 330,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  mostlySoldItems: {
    padding: Padding.p_xl,
    justifyContent: "space-between",
  },
  overallStatistics: {
    flex: 1,
  },
  more: {
    height: 24,
    alignItems: "center",
    width: 30,
    color: Color.colorDarkslateblue,
    fontWeight: "500",
    textDecoration: "underline",
  },
  graphIcon: {
    width: "100%",
    maxHeight: "100%",
    flex: 1,
    alignSelf: "stretch",
  },
  chart: {
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    paddingHorizontal: Padding.p_0,
    flex: 1,
    alignSelf: "stretch",
  },
  statistics: {
    padding: Padding.p_lgi,
    marginTop: 20,
  },
  overview: {
    flex: 1,
  },
  dashboardContent: {
    paddingVertical: Padding.p_11xl,
    paddingHorizontal: Padding.p_0,
    flex: 1,
    alignSelf: "stretch",
  },
  dashboardMin: {
    backgroundColor: Color.colorGray_100,
    maxWidth: "100%",
    width: "100%",
    flex: 1,
    alignSelf: "stretch",
  },
});

export default DashboardMin;
