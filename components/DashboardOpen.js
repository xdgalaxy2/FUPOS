import React, { useState } from "react";
import { Pressable, StyleSheet, View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const DashboardOpen = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState();
  const [dropdownItems, setDropdownItems] = useState([
    { value: "Today", label: "Today" },
    { value: "This Week", label: "This Week" },
    { value: "Last Week", label: "Last Week" },
    { value: "Last Moth", label: "Last Moth" },
  ]);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.dashboardOpen}>
      <View style={styles.submenu}>
        <View style={styles.frame}>
          <Pressable
            style={styles.sort}
            onPress={() => navigation.navigate("DashboardMin")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/sort1.png")}
            />
          </Pressable>
        </View>
        <View style={styles.frame1}>
          <View style={styles.frame2}>
            <Image
              style={styles.index1Icon}
              contentFit="cover"
              source={require("../assets/index-11.png")}
            />
            <Text style={styles.cafeteria}>CAFETERIA</Text>
          </View>
          <View style={styles.dashboardParent}>
            <View style={[styles.dashboard, styles.salesFlexBox]}>
              <View style={styles.dashboardContainer}>
                <Image
                  style={styles.dashboardIcon}
                  contentFit="cover"
                  source={require("../assets/dashboardicon.png")}
                />
                <Text style={styles.dashboard1}>Dashboard</Text>
              </View>
            </View>
            <Pressable
              style={[styles.sales, styles.salesFlexBox]}
              onPress={() => navigation.navigate("MenuOpenContainer")}
            >
              <View style={styles.dashboardContainer}>
                <Image
                  style={styles.salesIcon}
                  contentFit="cover"
                  source={require("../assets/salesicon.png")}
                />
                <Text style={styles.dashboard1}>Sales</Text>
              </View>
            </Pressable>
            <View style={[styles.sales, styles.salesFlexBox]}>
              <View style={styles.dashboardContainer}>
                <Image
                  style={styles.dashboardIcon}
                  contentFit="cover"
                  source={require("../assets/reportcontainer.png")}
                />
                <Text style={styles.dashboard1}>Reports</Text>
              </View>
            </View>
            <View style={[styles.sales, styles.salesFlexBox]}>
              <View style={styles.dashboardContainer}>
                <Image
                  style={styles.dashboardIcon}
                  contentFit="cover"
                  source={require("../assets/settingsicon.png")}
                />
                <Text style={styles.dashboard1}>Settings</Text>
              </View>
            </View>
          </View>
          <View style={styles.submenuButtomContainer}>
            <View style={styles.user}>
              <View style={styles.userContainer}>
                <Image
                  style={styles.userIcon}
                  contentFit="cover"
                  source={require("../assets/usericon.png")}
                />
                <Text style={[styles.manager, styles.textTypo2]}>Manager</Text>
              </View>
            </View>
            <View style={[styles.logout, styles.logoutBorder]}>
              <View style={styles.logoutContainer}>
                <Image
                  style={styles.salesIcon}
                  contentFit="cover"
                  source={require("../assets/logouticon.png")}
                />
                <Text style={[styles.logout1, styles.textTypo2]}>Logout</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.dashboardContent}>
        <View style={styles.frame3}>
          <Text style={[styles.dashboard2, styles.textTypo2]}>Dashboard</Text>
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
        <View style={[styles.statsWrapper, styles.overviewSpaceBlock1]}>
          <View style={styles.stats}>
            <View style={styles.statsShadowBox1}>
              <Image
                style={styles.statsIcon}
                contentFit="cover"
                source={require("../assets/stats.png")}
              />
              <View style={styles.parent}>
                <Text style={[styles.text, styles.textTypo2]}>₱ 12,456.00</Text>
                <Text style={[styles.totalRevenue, styles.textTypo1]}>
                  Total Revenue
                </Text>
              </View>
            </View>
            <View style={[styles.stats2, styles.statsShadowBox1]}>
              <Image
                style={styles.statsIcon}
                contentFit="cover"
                source={require("../assets/stats3.png")}
              />
              <View style={styles.parent}>
                <Text style={[styles.text, styles.textTypo2]}>1039</Text>
                <Text style={[styles.totalRevenue, styles.textTypo1]}>
                  Paid Orders
                </Text>
              </View>
            </View>
            <View style={[styles.stats3, styles.statsShadowBox1]}>
              <Image
                style={styles.statsIcon}
                contentFit="cover"
                source={require("../assets/stats4.png")}
              />
              <View style={styles.parent}>
                <Text style={[styles.text, styles.textTypo2]}>840</Text>
                <Text style={[styles.totalRevenue, styles.textTypo1]}>
                  Walk-ins
                </Text>
              </View>
            </View>
            <View style={[styles.stats4, styles.statsShadowBox1]}>
              <Image
                style={styles.dashboardIcon}
                contentFit="cover"
                source={require("../assets/money1.png")}
              />
              <View style={styles.parent}>
                <Text style={[styles.text, styles.textTypo2]}>199</Text>
                <Text style={[styles.totalRevenue, styles.textTypo1]}>
                  Cash in drawer
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.overview, styles.overviewSpaceBlock1]}>
          <View style={[styles.mostlySoldItems, styles.statisticsShadowBox1]}>
            <View style={styles.mostlySoldItemsParent}>
              <Text
                style={[styles.mostlySoldItems1, styles.mostlySoldItems1Typo1]}
              >
                Mostly sold items
              </Text>
              <Text style={[styles.seeAll, styles.moreTypo1]}>See All</Text>
            </View>
            <View style={styles.headerWrapper}>
              <View style={styles.header}>
                <View style={styles.logoutContainer}>
                  <Text style={[styles.item1, styles.textTypo1]}>Item</Text>
                </View>
                <View style={styles.orders}>
                  <Text style={[styles.orders1, styles.textTypo1]}>Orders</Text>
                </View>
                <View style={styles.orders}>
                  <Text style={[styles.ppu1, styles.textTypo1]}>PPU</Text>
                </View>
                <View style={styles.orders}>
                  <Text style={[styles.ppu1, styles.textTypo1]}>Revenue</Text>
                </View>
              </View>
            </View>
            <View style={styles.statslist}>
              <View style={styles.statslisting01}>
                <View style={styles.logoutContainer}>
                  <Image
                    style={styles.categoriesIcon}
                    contentFit="cover"
                    source={require("../assets/categories5.png")}
                  />
                  <Text style={[styles.type2, styles.textTypo1]}>Type 2</Text>
                </View>
                <Text style={[styles.text4, styles.textTypo1]}>530</Text>
                <Text style={[styles.text5, styles.textTypo1]}>₱3.99</Text>
                <Text style={[styles.text4, styles.textTypo1]}>₱2114.70</Text>
              </View>
              <View style={[styles.statslistChild, styles.logoutBorder]} />
              <View style={styles.statslisting01}>
                <View style={styles.logoutContainer}>
                  <Image
                    style={styles.categoriesIcon}
                    contentFit="cover"
                    source={require("../assets/categories6.png")}
                  />
                  <Text style={[styles.type2, styles.textTypo1]}>Type 5</Text>
                </View>
                <Text style={[styles.text4, styles.textTypo1]}>520</Text>
                <Text style={[styles.text5, styles.textTypo1]}>₱2.99</Text>
                <Text style={[styles.text4, styles.textTypo1]}>₱1554.80</Text>
              </View>
              <View style={[styles.statslistChild, styles.logoutBorder]} />
              <View style={styles.statslisting01}>
                <View style={styles.logoutContainer}>
                  <Image
                    style={styles.categoriesIcon}
                    contentFit="cover"
                    source={require("../assets/categories7.png")}
                  />
                  <Text style={[styles.type2, styles.textTypo1]}>Meals</Text>
                </View>
                <Text style={[styles.text4, styles.textTypo1]}>502</Text>
                <Text style={[styles.text5, styles.textTypo1]}>₱6.99</Text>
                <Text style={[styles.text4, styles.textTypo1]}>₱3508.98</Text>
              </View>
              <View style={[styles.statslistChild, styles.logoutBorder]} />
              <View style={styles.statslisting01}>
                <View style={styles.logoutContainer}>
                  <Image
                    style={styles.categoriesIcon}
                    contentFit="cover"
                    source={require("../assets/categories5.png")}
                  />
                  <Text style={[styles.type2, styles.textTypo1]}>Type 1</Text>
                </View>
                <Text style={[styles.text4, styles.textTypo1]}>502</Text>
                <Text style={[styles.text5, styles.textTypo1]}>₱3.99</Text>
                <Text style={[styles.text4, styles.textTypo1]}>₱3508.98</Text>
              </View>
              <View style={[styles.statslistChild, styles.logoutBorder]} />
              <View style={styles.statslisting01}>
                <View style={styles.logoutContainer}>
                  <Image
                    style={styles.categoriesIcon}
                    contentFit="cover"
                    source={require("../assets/categories8.png")}
                  />
                  <Text style={[styles.type2, styles.textTypo1]}>Type 4</Text>
                </View>
                <Text style={[styles.text4, styles.textTypo1]}>492</Text>
                <Text style={[styles.text5, styles.textTypo1]}>₱3.99</Text>
                <Text style={[styles.text4, styles.textTypo1]}>₱1963.08</Text>
              </View>
              <View style={[styles.statslistChild, styles.logoutBorder]} />
              <View style={styles.statslisting01}>
                <View style={styles.logoutContainer}>
                  <Image
                    style={styles.categoriesIcon}
                    contentFit="cover"
                    source={require("../assets/categories9.png")}
                  />
                  <Text style={[styles.type2, styles.textTypo1]}>
                    Ice Cream
                  </Text>
                </View>
                <Text style={[styles.text4, styles.textTypo1]}>450</Text>
                <Text style={[styles.text5, styles.textTypo1]}>₱3.99</Text>
                <Text style={[styles.text4, styles.textTypo1]}>₱1795.59</Text>
              </View>
              <View style={[styles.statslistChild, styles.logoutBorder]} />
              <View style={styles.statslisting01}>
                <View style={styles.logoutContainer}>
                  <Image
                    style={styles.categoriesIcon}
                    contentFit="cover"
                    source={require("../assets/categories5.png")}
                  />
                  <Text style={[styles.type2, styles.textTypo1]}>Type 3</Text>
                </View>
                <Text style={[styles.text4, styles.textTypo1]}>450</Text>
                <Text style={[styles.text5, styles.textTypo1]}>₱1.99</Text>
                <Text style={[styles.text4, styles.textTypo1]}>₱895.50</Text>
              </View>
            </View>
          </View>
          <View style={[styles.statistics, styles.statisticsShadowBox1]}>
            <View style={styles.mostlySoldItemsParent}>
              <Text
                style={[styles.overallStatistics, styles.mostlySoldItems1Typo1]}
              >
                Overall Statistics
              </Text>
              <Text style={[styles.more, styles.moreTypo1]}>More</Text>
            </View>
            <ScrollView
              style={styles.chart}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.chartScrollViewContent}
            >
              <Image
                style={styles.graphIcon}
                contentFit="cover"
                source={require("../assets/graph1.png")}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
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
  chartScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  salesFlexBox: {
    paddingVertical: Padding.p_0,
    paddingHorizontal: Padding.p_7xs,
    height: 38,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  textTypo2: {
    fontFamily: FontFamily.h2Regular,
    textAlign: "left",
  },
  logoutBorder: {
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  overviewSpaceBlock1: {
    marginTop: 31,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_0,
    alignSelf: "stretch",
  },
  textTypo1: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.h2Regular,
  },
  statsShadowBox1: {
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
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    flex: 1,
  },
  statisticsShadowBox1: {
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
    flex: 1,
    alignSelf: "stretch",
  },
  mostlySoldItems1Typo1: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.h2Regular,
    fontWeight: "700",
  },
  moreTypo1: {
    color: Color.colorDarkslateblue,
    fontWeight: "500",
    textDecoration: "underline",
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.h2Regular,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  sort: {
    width: 31,
    height: 30,
  },
  frame: {
    width: 161,
    paddingLeft: 130,
    justifyContent: "center",
    alignItems: "flex-end",
    overflow: "hidden",
  },
  index1Icon: {
    width: 99,
    height: 90,
  },
  cafeteria: {
    fontSize: FontSize.size_2xl,
    letterSpacing: 0.4,
    fontFamily: FontFamily.sFProDisplayRegular,
    width: 136,
    marginTop: 8,
    textAlign: "center",
    color: Color.white,
    fontWeight: "700",
    height: 30,
  },
  frame2: {
    height: 130,
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  dashboardIcon: {
    height: 24,
    width: 24,
  },
  dashboard1: {
    marginLeft: 10,
    height: 20,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.h2Regular,
    fontSize: FontSize.size_lg,
    color: Color.white,
    alignItems: "center",
    flex: 1,
  },
  dashboardContainer: {
    width: 133,
    alignItems: "center",
    flexDirection: "row",
  },
  dashboard: {
    backgroundColor: Color.colorGray_200,
  },
  salesIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  sales: {
    marginTop: 30,
  },
  dashboardParent: {
    alignSelf: "stretch",
  },
  userIcon: {
    width: 33,
    height: 31,
  },
  manager: {
    fontSize: FontSize.h2Regular_size,
    marginLeft: 14,
    textAlign: "left",
    color: Color.white,
  },
  userContainer: {
    width: 149,
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_12xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  user: {
    borderRadius: Border.br_11xl,
    borderColor: Color.white,
    height: 43,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  logout1: {
    marginLeft: 18,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.h2Regular,
    color: Color.white,
  },
  logoutContainer: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  logout: {
    borderColor: Color.colorMaroon,
    borderWidth: 2,
    paddingHorizontal: 11,
    paddingVertical: Padding.p_4xs,
    height: 38,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
    overflow: "hidden",
    flexDirection: "row",
  },
  submenuButtomContainer: {
    height: 101,
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  frame1: {
    height: 638,
    marginTop: 20,
    justifyContent: "space-between",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  submenu: {
    backgroundColor: Color.colorBrown,
    width: 187,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_12xl,
    alignSelf: "stretch",
  },
  dashboard2: {
    fontSize: FontSize.size_21xl,
    width: 225,
    color: Color.colorBlack,
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
    maxWidth: 125,
    maxHeight: 38,
    undefined: "",
    alignItems: "center",
    justifyContent: "center",
  },
  frame3: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_0,
    height: 38,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  statsIcon: {
    height: 20,
    width: 24,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.white,
    fontWeight: "700",
  },
  totalRevenue: {
    marginTop: 5,
    textAlign: "left",
    color: Color.white,
  },
  parent: {
    marginTop: 10,
  },
  stats2: {
    marginLeft: 20,
  },
  stats3: {
    marginLeft: 20,
  },
  stats4: {
    marginLeft: 20,
  },
  stats: {
    height: 95,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  statsWrapper: {
    height: 95,
    justifyContent: "space-between",
    overflow: "hidden",
  },
  mostlySoldItems1: {
    width: 182,
    height: 20,
  },
  seeAll: {
    width: 43,
    height: 20,
    alignItems: "flex-end",
  },
  mostlySoldItemsParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  item1: {
    width: 46,
    color: Color.colorBlack,
    textAlign: "center",
    fontWeight: "700",
  },
  orders1: {
    width: 58,
    color: Color.colorBlack,
    textAlign: "center",
    fontWeight: "700",
  },
  orders: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  ppu1: {
    color: Color.colorBlack,
    textAlign: "center",
    fontWeight: "700",
  },
  header: {
    height: 14,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
  },
  headerWrapper: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  categoriesIcon: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  type2: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  text4: {
    color: Color.colorBlack,
    textAlign: "center",
    fontWeight: "700",
    flex: 1,
  },
  text5: {
    color: Color.colorBlack,
    textAlign: "center",
    flex: 1,
  },
  statslisting01: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  statslistChild: {
    borderColor: Color.colorWhitesmoke_100,
    borderTopWidth: 1,
    height: 1,
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
    width: 30,
    height: 24,
    alignItems: "center",
  },
  graphIcon: {
    width: 436,
    height: 261,
  },
  chart: {
    width: "100%",
    flex: 1,
    alignSelf: "stretch",
  },
  statistics: {
    padding: Padding.p_lgi,
    marginLeft: 20,
  },
  overview: {
    height: 440,
    flexDirection: "row",
  },
  dashboardContent: {
    paddingHorizontal: Padding.p_0,
    paddingVertical: Padding.p_11xl,
    flex: 1,
    alignSelf: "stretch",
  },
  dashboardOpen: {
    backgroundColor: Color.colorGray_100,
    flexDirection: "row",
    width: "100%",
    flex: 1,
    alignSelf: "stretch",
  },
});

export default DashboardOpen;
