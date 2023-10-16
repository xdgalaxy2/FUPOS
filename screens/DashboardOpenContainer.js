import React, { useState } from "react";
import { Pressable, StyleSheet, View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import DropDownPicker from "react-native-dropdown-picker";
import DashboardOpen from "./DashboardOpen";
import { Color } from "../GlobalStyles";

const DashboardOpenContainer = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState();
  const [dropdownItems, setDropdownItems] = useState([
    { value: "Today", label: "Today" },
    { value: "This Week", label: "This Week" },
    { value: "Last Week", label: "Last Week" },
    { value: "Last Moth", label: "Last Moth" },
  ]);

  return (
    <View style={styles.dashboardOpenContainer}>
      <DashboardOpen />
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
  dashboardOpenContainer: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 834,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default DashboardOpenContainer;
