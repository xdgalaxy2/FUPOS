import React, { useState } from "react";
import { ScrollView, Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import DropDownPicker from "react-native-dropdown-picker";
import DashboardMin from "./DashboardMin";
import { Color } from "../GlobalStyles";

const DashboardMinContainer = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState();
  const [dropdownItems, setDropdownItems] = useState([
    { value: "Today", label: "Today" },
    { value: "This Week", label: "This Week" },
    { value: "Last Week", label: "Last Week" },
    { value: "Last Moth", label: "Last Moth" },
  ]);

  return (
    <View style={styles.dashboardMinContainer}>
      <DashboardMin />
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
  dashboardMinScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dashboardMinContainer: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 1194,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default DashboardMinContainer;
