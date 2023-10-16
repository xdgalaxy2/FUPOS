const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LoginContainer from "./screens/LoginContainer";
import DashboardMin from "./screens/DashboardMin";
import DashboardOpen from "./screens/DashboardOpen";
import Cashoutdrawer from "./components/Cashoutdrawer";
import MenuOpenContainer from "./screens/MenuOpenContainer";
import MenuMinContainer from "./screens/MenuMinContainer";
import DashboardMinContainer from "./screens/DashboardMinContainer";
import DashboardOpenContainer from "./screens/DashboardOpenContainer";
import SplashscreenContainer from "./screens/SplashscreenContainer";
import Logoutsuccesfuly from "./components/Logoutsuccesfuly";
import Loginsuccesfuly from "./components/Loginsuccesfuly";
import Cashoutdrawer1 from "./components/Cashoutdrawer1";
import Cashindrawer from "./components/Cashindrawer";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "SFProDisplay-Regular": require("./assets/fonts/SFProDisplay-Regular.otf"),
    "SFProText-Light": require("./assets/fonts/SFProText-Light.otf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LoginContainer"
              component={LoginContainer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardMin"
              component={DashboardMin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardOpen"
              component={DashboardOpen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenuOpenContainer"
              component={MenuOpenContainer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenuMinContainer"
              component={MenuMinContainer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardMinContainer"
              component={DashboardMinContainer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardOpenContainer"
              component={DashboardOpenContainer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashscreenContainer"
              component={SplashscreenContainer}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashscreenContainer />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
